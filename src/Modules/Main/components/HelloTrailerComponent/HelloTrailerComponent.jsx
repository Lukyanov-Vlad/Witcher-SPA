export const HelloTrailerComponent = () => {
    return (
        <section className="hello_and_trailer">

            <div className="hello_text">
                <h1 className="h1_text_title">От предназначения не уйти...</h1>
                <p className="hello_text_desc">«Ведьмак 3: Дикая Охота» — это сюжетная ролевая игра с открытым миром. Её действие разворачивается в поразительной волшебной вселенной, и любое ваше решение может повлечь за собой серьёзные последствия. Вы играете за профессионального охотника на монстров Геральта из Ривии, которому поручено найти Дитя предназначения в огромном мире, полном торговых городов, пиратских островов, опасных горных перевалов и заброшенных пещер.</p>
                <h2 className="h2_title">Трейлер игры:</h2>
            </div>
            <div className="trailer_div">
                <iframe src="https://www.youtube.com/embed/4ndIeNusRLI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="trailer"></iframe>
            </div>


        </section>
    )
}