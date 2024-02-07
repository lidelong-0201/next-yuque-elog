'use client'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition, Combobox } from '@headlessui/react'
import clsx from 'clsx'
import { useRequest } from 'ahooks'
import { useRouter } from 'next/navigation'
import { renderToString } from 'react-dom/server'
function SearchIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="4452"
      {...props}
    >
      <path
        d="M883.626667 823.04l-145.066667-144.64A337.92 337.92 0 0 0 810.666667 469.333333a341.333333 341.333333 0 1 0-341.333334 341.333334 337.92 337.92 0 0 0 209.066667-72.106667l144.64 145.066667a42.666667 42.666667 0 0 0 60.586667 0 42.666667 42.666667 0 0 0 0-60.586667zM213.333333 469.333333a256 256 0 1 1 256 256 256 256 0 0 1-256-256z"
        p-id="4453"
      ></path>
    </svg>
  )
}

const notFound = (
  <div className="bg-slate-50 px-16 py-20 text-center">
    <h2 className="font-semibold text-slate-900">未找到结果</h2>
    <p className="mt-2 text-sm leading-6 text-slate-600">
      找不到包含该内容的任何文章，请尝试搜索其他内容。
    </p>
  </div>
)
interface Article {
  title: string
  id: string
  summary: string
  target: {
    slug: string
  }
}
function Search({ closeModal }: { closeModal: () => void }) {
  const router = useRouter()
  const [data, setData] = useState<Article[]>([])
  const [inputVal, setInputVal] = useState<string>('')
  const { run: getDoc } = useRequest(
    (query) => {
      if (!query) return Promise.resolve([])
      return fetch('/api/docSearch?q=' + query, {
        method: 'GET',
        cache: 'no-cache',
      }).then((res) => res.json())
    },
    {
      onSuccess(data) {
        setData(data)
      },
      onError(e) {
        console.log(e)
      },
      manual: true,
    },
  )

  const getHighlightedContent = (str: string) => {
    const highlightedMatch = str.replace(
      new RegExp(inputVal, 'gi'),
      (match) => {
        return renderToString(
          <span className="bg-yellow-200 text-yellow-800">{match}</span>,
        )
      },
    )
    return {
      __html: highlightedMatch,
    }
  }

  return (
    <>
      <Combobox
        onChange={(title) => {
          closeModal()
          const slug = data.find((item) => item.title === title)!.target.slug
          router.push('/articles/' + slug)
        }}
      >
        <div className="flex items-center">
          <Combobox.Input
            className={
              'block w-full appearance-none bg-transparent py-4 pl-4 pr-12 text-base text-slate-900 placeholder:text-slate-600 focus:outline-none sm:text-sm sm:leading-6'
            }
            placeholder="请输入关键字"
            onChange={(event) => {
              setInputVal(event.target.value)
              getDoc(event.target.value)
            }}
          />
          <div className="px-2">
            <SearchIcon className="h-8 w-8 fill-zinc-500 transition  group-hover:fill-zinc-700" />
          </div>
        </div>
        <Combobox.Options
          className={
            'max-h-[18.375rem] divide-y divide-slate-200 overflow-y-auto rounded-b-lg border-t border-slate-200 text-sm leading-6'
          }
        >
          {data.map((article) => {
            return (
              <Combobox.Option
                key={article.id}
                value={article.title}
                as={Fragment}
              >
                {({ active }) => (
                  <li
                    className={clsx('cursor-pointer p-4 ', {
                      ['bg-zinc-100']: active,
                    })}
                  >
                    <h3
                      className={clsx(
                        'whitespace-nowrap font-semibold text-slate-900',
                      )}
                      dangerouslySetInnerHTML={getHighlightedContent(
                        article.title,
                      )}
                    ></h3>
                    <p
                      className={
                        'overflow-hidden overflow-ellipsis whitespace-nowrap text-slate-700'
                      }
                      dangerouslySetInnerHTML={getHighlightedContent(
                        article.summary,
                      )}
                    ></p>
                  </li>
                )}
              </Combobox.Option>
            )
          })}
        </Combobox.Options>
        <div></div>
      </Combobox>
      {!!inputVal.length && !data.length && notFound}
    </>
  )
}

export default function DocSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <>
      <button
        type="button"
        className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <SearchIcon className="h-6 w-6 fill-zinc-500  transition group-hover:fill-zinc-700  dark:fill-teal-500 dark:group-hover:fill-teal-500" />
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-900/25 opacity-100 backdrop-blur transition-opacity"></div>
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative w-full max-w-lg scale-100 transform px-4 opacity-100 transition-all">
              <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
                <Search closeModal={closeModal} />
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}
