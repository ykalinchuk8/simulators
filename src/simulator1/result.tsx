import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import {useEffect, useState} from "react";

export function Result(props: any) {
    const [title, setTitle] = useState('Taxa de Esforço Positiva');
    const [text, setText] = useState('Parabéns, a sua taxa de esforço encontra-se equilibrada.  A relação entre seus rendimentos e encargos mensais é positiva, permitindo-lhe novos investimentos e desafios.');

    const [button1Text, setButton1Text] = useState('Crédito Habitação');
    const [button1Link, setButton1Link] = useState('https://jpcreditoeseguros.pt/credito-consolidado/');

    const [button2Text, setButton2Text] = useState('Crédito à Construção');
    const [button2Link, setButton2Link] = useState('https://jpcreditoeseguros.pt/credito-consolidado/');

    const [button3Text, setButton3Text] = useState('');
    const [button3Link, setButton3Link] = useState('');

    const [button4Text, setButton4Text] = useState('');
    const [button4Link, setButton4Link] = useState('');

    const [primaryColor, setPrimaryColor] = useState('#8FCE00');
    const [secondaryColor, setSecondaryColor] = useState('#e8f5cc');

    useEffect(() => {
        if (typeof props.value === 'number') {
            setPrimaryColor('#8FCE00');
            setSecondaryColor('#e8f5cc');

            setTitle('Taxa de Esforço Positiva');
            setText('Parabéns, a sua taxa de esforço encontra-se equilibrada.  A relação entre seus rendimentos e encargos mensais é positiva, permitindo-lhe novos investimentos e desafios.\n Uma vez que se encontra numa situação positiva, se desejar poderá deixar o seu pedido de crédito sem custos nas seguintes opções:');

            setButton1Text('');
            setButton1Link('');

            setButton2Text('');
            setButton2Link('');

            setButton3Text('');
            setButton3Link('');

            setButton4Text('');
            setButton4Link('');

            if (props.isHousingLoanSet) {
                setButton1Text('Transferência Crédito Habitação');
                setButton1Link('https://jpcreditoeseguros.pt/transferencia-de-credito-habitacao/');
                setButton2Text('');
                setButton2Link('');

            } else {
                setButton1Text('Crédito Habitação');
                setButton1Link('https://jpcreditoeseguros.pt/credito-consolidado/');
                setButton2Text('Crédito à Construção');
                setButton2Link('https://jpcreditoeseguros.pt/credito-consolidado/');

                if (props.isOtherCreditsSet) {
                    setButton1Text('Crédito Consolidado');
                    setButton1Link('https://jpcreditoeseguros.pt/credito-consolidado/');
                } else {
                    setButton3Text('Crédito Automóvel');
                    setButton3Link('https://jpcreditoeseguros.pt/credito-consolidado/');
                    setButton4Text('Crédito Pessoal');
                    setButton4Link('https://jpcreditoeseguros.pt/credito-pessoal/');
                }
            }


            if (props.value > 30) {
                setPrimaryColor('#FEBF02');
                setSecondaryColor('#fef6db');

                setTitle('Taxa de Esforço Preocupante');
                setText('Atenção! A sua taxa de esforço apresenta elementos que deve controlar para evitar complicações futuras.');
            }

            if (props.value > 50) {
                setPrimaryColor('#E69138');
                setSecondaryColor('#F7DEC3');

                setTitle('Taxa de Esforço Crítica');
                setText('Atenção! A sua taxa de esforço apresenta níveis críticos. Procure soluções para melhorar a sua situação o quanto antes. Para que não entre em incumprimento bancário.\n Para melhorar a sua situação, sugerimos que deixe o seu pedido de:');
            }

            if (props.value > 100) {
                setPrimaryColor('#dc4b46');
                setSecondaryColor('#fae7e6');

                setTitle('Taxa de Esforço Incomportável');
                setText('Alerta! A sua taxa de esforço é incomportável. É urgente tomar medidas imediatas para contornar esta situação. Peça ajuda ao seu banco ou a um intermediário de crédito antes de entrar em incumprimento.');
            }

            if (props.value > 30 || props.value > 50 || props.value > 100) {
                setButton1Text('');
                setButton1Link('');

                setButton2Text('');
                setButton2Link('');

                setButton3Text('');
                setButton3Link('');

                setButton4Text('');
                setButton4Link('');

                if (props.isHousingLoanSet) {
                    setButton1Text('Transferência Crédito Habitação');
                    setButton1Link('https://jpcreditoeseguros.pt/transferencia-de-credito-habitacao/');
                } else {
                    setButton1Text('Crédito Consolidado');
                    setButton1Link('https://jpcreditoeseguros.pt/credito-consolidado/');
                }
            }
        }


    })

    return <section
        className="result-section rounded border-solid border-[1px] border-[#0E2F3F] p-4 mt-10 animate-[fade-in-down_1s_ease-in-out]">
        <h1 className="text-xl text-[#083649]">Resultado da taxa de esforço</h1>
        {props.value === '' && (
            <div className="flex flex-col mt-4 bg-[#CCEBF5] p-4 rounded-md">
                <h1 className="text-[#09c]">Dados em falta</h1>
                <h3>Insira valores acima para ver os resultados da simulação</h3>
            </div>
        )}
        {props.value !== '' && (
            <div className="flex flex-wrap mt-4 justify-center">
                <CircularProgressWithLabel value={props.value} primaryColor={primaryColor} />
                <div
                    className={`content-block ml-8 mb-5 p-4 rounded border-solid border-[1px] bg-[#FDF4D8] flex-grow w-[50%]`} style={{background: secondaryColor, borderColor: props.value > 60 ? primaryColor : '#414BB2'}}>
                    <h1 className={`inline-block rounded text-white px-2 py-1`} style={{background: primaryColor}}>{title}</h1>
                    <p className="mt-5 text-[#225E3C] font-light">{text}</p>
                    <div className="mt-5 flex flex-wrap items-center w-full gap-2">
                        <a target="_blank" href={button1Link}
                           className={`inline-block mt-5 rounded-md text-black py-2 px-4 text-center`} style={{background: primaryColor, color: props.value > 60 ? 'white' : 'black'}}>{button1Text}</a>
                        {(button2Text !== '') && <a target="_blank" href={button2Link}
                                                   className={`inline-block mt-5 rounded-md text-black py-2 px-4 text-center`} style={{background: primaryColor, color: props.value > 60 ? 'white' : 'black'}}>{button2Text}</a>}
                    </div>
                    {(button3Text !== '') && <div className="flex flex-wrap items-center w-full gap-2">
                        <a target="_blank" href={button3Link}
                           className={`inline-block mt-5 rounded-md text-black py-2 px-4 text-center`} style={{background: primaryColor, color: props.value > 60 ? 'white' : 'black'}}>{button3Text}</a>
                        <a target="_blank" href={button4Link}
                           className={`inline-block mt-5 rounded-md text-black py-2 px-4 text-center`} style={{background: primaryColor, color: props.value > 60 ? 'white' : 'black'}}>{button4Text}</a>
                    </div>}
                </div>
            </div>
        )}
    </section>
}

function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number, primaryColor: string },
) {
    let value = Math.round(props.value);

    let localValue = value > 100 ? 100 : value;

    let valuePercentage = value;

    if (isNaN(localValue) || !isFinite(localValue)) {
        localValue = 0;
        valuePercentage = 0;
    }

    if (valuePercentage > 100) {
        //@ts-ignore
        valuePercentage = '>100';
    }

    return (
        <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', margin: '10px 30px' }}>
            <CircularProgress sx={{color: props.primaryColor, backgroundColor: '#f8f8f8', borderRadius: '100%'}} size={150} thickness={5} variant="determinate" value={localValue} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '100%',
                    padding: '20px'
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    sx={{color: props.primaryColor, fontWeight: 'bold', fontSize: '2rem'}}
                >{valuePercentage}%</Typography>
            </Box>
        </Box>
    );
}
