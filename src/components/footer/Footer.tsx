function Footer() {
    let data = new Date().getFullYear()

    return (
        <>
            <footer className="flex justify-center bg-zinc-900 border-t border-cyan-400/20 text-zinc-100">
                <div className="container flex flex-col items-center gap-2 py-6 px-6 text-center">
                    <p className='text-xl font-bold'>
                        AQUA ALERT · Global Solution FIAP 2026.2 | Copyright: {data}
                    </p>
                    <p className='text-zinc-400'>
                        Emergência? Defesa Civil: 199 · Bombeiros: 193
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer
