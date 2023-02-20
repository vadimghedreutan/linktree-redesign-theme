import BrowserIcon from "./icons/BrowserIcon"
import LinkedIcon from "./icons/LinkedIcon"

interface Props {
	url: string
	title: string
}

const LinkCard = ({ url, title }: Props) => {
	return (
		<a
			href={url}
			className="flex p-4 mb-3 rounded-full w-full border border-gray-300 transition-all duration-150 hover:scale-105"
			target="_blank"
		>
			<div className="flex items-center w-full">
				<div className="w-8 h-8 flex items-center">
					{url &&
					url.includes(
						"http://www.linkedin.com/in/vadimghedreutan"
					) ? (
						<LinkedIcon />
					) : (
						<BrowserIcon />
					)}
				</div>
				<div className="flex justify-center w-full">
					<h2 className="font-popins font-medium text-sm sm:text-base flex items-center text-center">
						{title}
					</h2>
				</div>
			</div>
		</a>
	)
}
export default LinkCard
