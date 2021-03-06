import ImageTypes from '../../../types/ImageTypes'

type Props = {
    className?: string
    data: ImageTypes
}

export default function ImageWithCaption({ data, className }: Props) {
    return (
        <div className="relative overflow-hidden w-full h-full">
            <img
                className={`${className} ${data.caption && 'pb-6'}`}
                src={data.url}
                alt={data.alt}
                width={data.width}
                height={data.height}
                id={data.id}
            />
            {data.caption && <span className="absolute bottom-0 right-0">{data.caption}</span>}
        </div>
    )
}
