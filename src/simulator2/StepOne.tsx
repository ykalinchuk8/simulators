import '../App.css'
import {InputAdornment, TextField, Slider} from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {useEffect} from "react";
import dayjs, {Dayjs} from "dayjs";

type AppProps = {
    financeDeadlineLimit: any,
    financeDeadline: any,
    propertyPrice: any,
    financeValue: any,
    peopleAmount: any,
    monthlyPayment: any,
    person1Age: any,
    person2Age: any,
    setPerson1Age: Function,
    setPerson2Age: Function,
    setPeopleAmount: Function,
    setMonthlyPayment: Function,
    setPropertyPrice: Function,
    setFinanceValue: Function,
    setFinanceDeadlineLimit: Function,
    setFinanceDeadline: Function,
    handleStepSubmit: Function
};

function App({
                 financeDeadlineLimit,
                 financeDeadline,
                 propertyPrice,
                 financeValue,
                 peopleAmount,
                 monthlyPayment,
                 person1Age,
                 person2Age,
                 setPerson1Age,
                 setPerson2Age,
                 setPeopleAmount,
                 setMonthlyPayment,
                 setPropertyPrice,
                 setFinanceValue,
                 setFinanceDeadlineLimit,
                 setFinanceDeadline,
                 handleStepSubmit
             }: AppProps) {
    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 125000,
            label: '€125 000',
        },
        {
            value: 250000,
            label: '€250 000',
        },
        {
            value: 375000,
            label: '€375 000',
        },
        {
            value: 500000,
            label: '€500 000',
        },
    ];

    const ageMarks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 10,
            label: '10 anos',
        },
        {
            value: 20,
            label: '20 anos',
        },
        {
            value: 30,
            label: '30 anos',
        },
        {
            value: financeDeadlineLimit,
            label: financeDeadlineLimit + ' anos',
        },
    ];

    useEffect(() => {
        if (financeDeadline > 0) {
            setMonthlyPayment(-PMT(0.03/12, financeDeadline * 12, financeValue));
        }
    });

    //@ts-ignore
    const PMT = (ir, np, pv, fv = 0, type = 0) => {
        /*
         * ir   - interest rate per month
         * np   - number of periods (months)
         * pv   - present value
         * fv   - future value
         * type - when the payments are due:
         *        0: end of the period, e.g. end of month (default)
         *        1: beginning of period
         */
        var pmt, pvif;

        fv || (fv = 0);
        type || (type = 0);

        if (ir === 0)
            return -(pv + fv)/np;

        pvif = Math.pow(1 + ir, np);
        pmt = - ir * (pv * pvif + fv) / (pvif - 1);

        if (type === 1)
            pmt /= (1 + ir);

        return pmt;
    }

    function valueMoney(value: number) {
        return `€${value}`;
    }

    function valueYears(value: number) {
        return value === 1 ? `${value} ano` : `${value} anos`;
    }

    const handlePropertyPrice = (value: any) => {
        setPropertyPrice(+value);
        setFinanceValue(+value * 0.9);
    }

    const handleFinanceValue = (value: any) => {
        if (value <= +propertyPrice * 0.9) {
            setFinanceValue(value)
        }
    }

    const handlePersonAges = (personAge1: Dayjs | null, personAge2: Dayjs | null) => {
        if (personAge1) {
            let theOldestPerson = personAge1;

            if (peopleAmount === 2 && personAge2) {
                theOldestPerson = personAge1.diff(personAge2) >= 0 ? personAge2 : personAge1;
            }

            const theOldestAge = dayjs().diff(theOldestPerson, 'years')

            let deadlineLimit = financeDeadlineLimit;
            let oldLimit = financeDeadlineLimit;

            if (theOldestAge <= 30) {
                deadlineLimit = 40;
            }

            if (theOldestAge > 30 && theOldestAge <= 35) {
                deadlineLimit = 37;
            }

            if (theOldestAge > 35) {
                deadlineLimit = 35;
            }

            setFinanceDeadlineLimit(deadlineLimit);

            if ((financeDeadline > deadlineLimit) || oldLimit == financeDeadline) {
                setFinanceDeadline(deadlineLimit);
            }
        }
    }

    const handlePerson1Age = (value: Dayjs | null) => {
        handlePersonAges(value as Dayjs, person2Age);
        setPerson1Age(value);
    }

    const handlePerson2Age = (value: Dayjs | null) => {
        handlePersonAges(value as Dayjs, person1Age);
        setPerson2Age(value);
    }

    return (
        <>
            {/*@ts-ignore*/}
            <form action="#" className="p-12 flex flex-col" id="simulator-form" onSubmit={handleStepSubmit}>
                <h1 className="font-bold text-[#083649] text-2xl">Valor de venda do imóvel que pretendem comprar?</h1>
                <div className='flex flex-wrap gap-8 items-center mb-4'>
                    <Slider
                        value={propertyPrice}
                        //@ts-ignore
                        onChange={(e, value) => {
                            handlePropertyPrice(value)
                        }}
                        aria-label="Always visible"
                        getAriaLabel={valueMoney}
                        getAriaValueText={valueMoney}
                        valueLabelFormat={valueMoney}
                        step={500}
                        max={500000}
                        marks={marks}
                        valueLabelDisplay="auto"
                        sx={{
                            flexGrow: 1,
                            width: 'auto',
                            minWidth: '50%',
                            color: '#DEE4EC',
                            '& .MuiSlider-mark': {color: '#DEE4EC'},
                            '& .MuiSlider-thumb': {color: '#fff'},
                            '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-active, & .MuiSlider-thumb.Mui-focusVisible': {boxShadow: '0px 0px 0px 6px #FBC002'}
                        }}
                    />
                    <TextField
                        onChange={(e) => {
                            handlePropertyPrice(+e.target.value)
                        }}
                        value={propertyPrice}
                        id="net_income"
                        sx={{m: 1}}
                        InputProps={{
                            endAdornment: <InputAdornment position="start">€</InputAdornment>,
                        }}
                    />
                </div>


                <h1 className="font-bold text-[#083649] text-2xl mb-2">Valor a Financiar?</h1>
                <h3 className="text-[#083649] text-sm mb-3">O valor a financiar tem o limite máximo de 90% do valor do
                    imóvel.</h3>
                <div className='flex flex-wrap gap-8 items-center mb-4'>
                    <Slider
                        value={financeValue}
                        //@ts-ignore
                        onChange={(e, value) => {
                            handleFinanceValue(value)
                        }}
                        aria-label="Always visible"
                        getAriaLabel={valueMoney}
                        getAriaValueText={valueMoney}
                        valueLabelFormat={valueMoney}
                        step={500}
                        max={500000}
                        marks={marks}
                        valueLabelDisplay="auto"
                        sx={{
                            flexGrow: 1,
                            width: 'auto',
                            minWidth: '50%',
                            color: '#DEE4EC',
                            '& .MuiSlider-mark': {color: '#DEE4EC'},
                            '& .MuiSlider-thumb': {color: '#fff'},
                            '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-active, & .MuiSlider-thumb.Mui-focusVisible': {boxShadow: '0px 0px 0px 6px #FBC002'}
                        }}
                    />
                    <TextField
                        onChange={(e) => {
                            handleFinanceValue(+e.target.value)
                        }}
                        value={financeValue}
                        id="net_income"
                        sx={{m: 1}}
                        InputProps={{
                            endAdornment: <InputAdornment position="start">€</InputAdornment>,
                        }}
                    />
                </div>
                <h1 className="font-bold text-[#083649] text-2xl mb-4">Quantas pessoas vão pedir este empréstimo?</h1>
                <div className='flex mb-4'>
                    <FormControl>
                        <RadioGroup
                            value={peopleAmount}
                            onChange={(e) => {
                                setPeopleAmount(+e.target.value)
                            }}
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="1" control={<Radio/>} label="1 Pessoa"/>
                            <FormControlLabel value="2" control={<Radio/>} label="2 Pessoas"/>
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='flex flex-wrap gap-x-32 gap-y-10'>
                    <div className='flex flex-col gap-4'>
                        <h1 className="font-bold text-[#083649] text-2xl">Idade da 1ª Pessoa</h1>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker minDate={dayjs('01-01-1900')} value={person1Age} onChange={(value) => {
                                    handlePerson1Age(value);
                                }}/>
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>

                    {peopleAmount === 2 &&
                        <div className='flex flex-col gap-4'>
                            <h1 className="font-bold text-[#083649] text-2xl">Idade da 2ª Pessoa</h1>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker minDate={dayjs('01-01-1900')} value={person2Age} onChange={(value) => {
                                        handlePerson2Age(value);
                                    }}/>
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                    }
                </div>
                <h1 className="font-bold text-[#083649] text-2xl mt-10 mb-4">Prazo a Financiar?</h1>
                <Slider
                    value={financeDeadline}
                    //@ts-ignore
                    onChange={(e, value) => {
                        setFinanceDeadline(value as number)
                    }}
                    aria-label="Always visible"
                    getAriaLabel={valueYears}
                    getAriaValueText={valueYears}
                    valueLabelFormat={valueYears}
                    step={1}
                    max={financeDeadlineLimit}
                    marks={ageMarks}
                    valueLabelDisplay="auto"
                    sx={{
                        flexGrow: 1,
                        width: 'auto',
                        minWidth: '50%',
                        color: '#DEE4EC',
                        '& .MuiSlider-mark': {color: '#DEE4EC'},
                        '& .MuiSlider-thumb': {color: '#fff'},
                        '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-active, & .MuiSlider-thumb.Mui-focusVisible': {boxShadow: '0px 0px 0px 6px #FBC002'}
                    }}
                />

                <div className="result-section rounded border-solid border-[1px] border-[#0E2F3F] p-4 mt-10">
                    <h1 className="font-bold text-3xl text-[#083649] mb-4">Prestação Mensal</h1>
                    <h3 className='text-xl mb-8'>{monthlyPayment === 0 || isNaN(monthlyPayment) ? '000,00' : new Intl.NumberFormat('pt-PT').format(monthlyPayment)}€</h3>
                    <button className='px-5 py-3 bg-[#414BB2] rounded text-white'>Submeter Pedido Crédito Habitação</button>
                </div>
            </form>
        </>
    )
}

export default App
