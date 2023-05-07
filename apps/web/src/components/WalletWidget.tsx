"use client";
import { Fragment } from "react";
import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";

export function WalletWidget({
	buttonProps,
	defaultOpen = true,
	children,
}: {
	buttonProps?: {
		className?: string;
		openIcon?: React.ReactNode | JSX.Element;
		imageSrc?: string;
	};
	defaultOpen?: boolean;
	children: React.ReactNode;
}) {
	return (
		<Disclosure defaultOpen={defaultOpen}>
			{({ open }) => (
				<div className="fixed bottom-0 right-0 flex flex-col items-end">
					<Transition
						enter="transition duration-100 ease-out"
						enterFrom="transform scale-95 opacity-0"
						enterTo="transform scale-100 opacity-100"
						leave="transition duration-75 ease-out"
						leaveFrom="transform scale-100 opacity-100"
						leaveTo="transform scale-95 opacity-0"
						as={Fragment}
					>
						<Disclosure.Panel className="relative mr-4 flex w-full flex-col items-stretch rounded-lg bg-white p-1 shadow-lg dark:bg-slate-700 dark:shadow-black sm:w-96">
							{children}
						</Disclosure.Panel>
					</Transition>
					<Disclosure.Button className="m-4 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full shadow-md dark:bg-neutral-900 dark:shadow-black">
						{open ? (
							<XMarkIcon className="h-6 w-6 text-white" />
						) : (
							<>
								{buttonProps?.imageSrc && (
									<Image
										width={100}
										height={100}
										className="mx-auto my-3 h-[35px] w-auto"
										src={buttonProps.imageSrc}
										alt="widget button"
										priority={true}
									/>
								)}
							</>
						)}
					</Disclosure.Button>
				</div>
			)}
		</Disclosure>
	);
}
