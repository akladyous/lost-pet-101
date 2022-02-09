import '../css/header.css'

export default function PageHeader({title, subTitle}) {
    return (
        <>
            <header className= "my-1 pt-4 header-area header-bg">
                <div className="container">
                    <h2 className="display-5 text-light text-center">
                        {title}
                    </h2>
                    <p className="text-white text-center">
                        {subTitle}
                    </p>
                </div>
            </header>
        </>
    )
}
