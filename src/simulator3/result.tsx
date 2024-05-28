export function Result(props: any) {
    return <section
        className="result-section mt-16">
        <h1 className="font-bold text-[#083649] text-3xl mb-10">Resultado da sua simulação</h1>
        <div className="flex flex-col mt-4 justify-center">
            <div className={'bg-gray-100'}>
                <div className={'flex justify-between bg-[#ECEDED] py-4 px-3'}>
                    <span>IMT</span>
                    <span className={'font-bold'}>€{props.IMT.toFixed(2)}</span>
                </div>
                <div className={'flex justify-between py-4 px-3'}>
                    <span>Imposto Selo <span className={'text-[#fbc000]'}>(0.8%)</span></span>
                    <span className={'font-bold'}>€{props.stampTax.toFixed(2)}</span>
                </div>
                <div className={'flex justify-between font-[#FEBF02] py-4 px-3 bg-[#FEBF02] text-white'}>
                    <span>Total a Pagar</span>
                    <span className={'font-bold'}>€{props.total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    </section>
}
