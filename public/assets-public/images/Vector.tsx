type VectorbgProps = {
    className?: string,
    url: string
}


const Vector = ({ className ,url}: VectorbgProps) => {
    return (
        <img className={className}
            src={url} />
    )
}

export default Vector