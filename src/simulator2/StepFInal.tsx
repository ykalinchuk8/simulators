import '../App.css'
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {InputAdornment, Slider, TextField} from "@mui/material";
import {useState, FormEvent} from "react";


function StepFinal(props: any) {
    const [monthlyIncome, setMonthlyIncome] = useState(0);
    const [monthlyExpenses, setMonthlyExpenses] = useState(0);

    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 2500,
            label: '€2500',
        },
        {
            value: 5000,
            label: '€5000',
        },
        {
            value: 7500,
            label: '€7500',
        },
        {
            value: 10000,
            label: '€10 000',
        },
    ];

    function valueMoney(value: number) {
        return `€${value}`;
    }

    const handleFormSubmit = (e: FormEvent) => {
        props.concatFormData({
            'Rendimentos Líquidos mensais dos titulares da proposta (vencimento, rendas, outros rendimentos)': monthlyIncome,
            'Despesas mensais (prestações de créditos, renda, ...)': monthlyExpenses
        })
        props.handleStepSubmit(e);
    };

    return (
        <>
            <form action="#" className="p-12 flex flex-col" id="simulator-form-multistep"
                  onSubmit={handleFormSubmit}>
                <h1 className="font-bold text-[#083649] text-2xl">Rendimentos Líquidos mensais dos titulares da proposta (vencimento, rendas, outros rendimentos)</h1>
                <div className='flex flex-wrap gap-8 items-center mb-4'>
                    <Slider
                        id={'slider1'}
                        name='Rendimentos Líquidos mensais dos titulares da proposta (vencimento, rendas, outros rendimentos)'
                        value={monthlyIncome}
                        //@ts-ignore
                        onChange={(e, value) => {
                            setMonthlyIncome(+value);
                        }}
                        aria-label="Always visible"
                        getAriaLabel={valueMoney}
                        getAriaValueText={valueMoney}
                        valueLabelFormat={valueMoney}
                        step={50}
                        max={10000}
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
                        name='Rendimentos Líquidos mensais dos titulares da proposta (vencimento, rendas, outros rendimentos)'
                        onChange={(e) => {
                            setMonthlyIncome(+e.target.value);
                        }}
                        value={monthlyIncome}
                        id="net_income"
                        sx={{m: 1}}
                        InputProps={{
                            endAdornment: <InputAdornment position="start">€</InputAdornment>,
                        }}
                    />
                </div>
                <h1 className="font-bold text-[#083649] text-2xl">Despesas mensais (prestações de créditos, renda, ...)</h1>
                <div className='flex flex-wrap gap-8 items-center mb-4'>
                    <Slider
                        id={'slider2'}
                        name='Despesas mensais (prestações de créditos, renda, ...'
                        value={monthlyExpenses}
                        //@ts-ignore
                        onChange={(e, value) => {
                            setMonthlyExpenses(+value);
                        }}
                        aria-label="Always visible"
                        getAriaLabel={valueMoney}
                        getAriaValueText={valueMoney}
                        valueLabelFormat={valueMoney}
                        step={50}
                        max={10000}
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
                        name='Despesas mensais (prestações de créditos, renda, ...'
                        onChange={(e) => {
                            setMonthlyExpenses(+e.target.value);
                            props.handleInputChange(e);
                        }}
                        value={monthlyExpenses}
                        id="monthly_expenses"
                        sx={{m: 1}}
                        InputProps={{
                            endAdornment: <InputAdornment position="start">€</InputAdornment>,
                        }}
                    />
                </div>
                <div className='mb-6'>
                    <FormControl required sx={{width: '100%', '& .MuiFormLabel-asterisk': {color: 'red'}}}>
                        <InputLabel id="label-1">Atualmente reside em...</InputLabel>
                        <Select
                            name='Atualmente reside em...'
                            required
                            labelId="label-1"
                            id="select-1"
                            label="Atualmente reside em... *"
                            defaultValue=''
                            onChange={props.handleInputChange}
                        >
                            <MenuItem value="">
                                Selecionar opção
                            </MenuItem>
                            <MenuItem value='Casa Própria Sem Crédito'>Casa Própria Sem Crédito</MenuItem>
                            <MenuItem value='Casa Própria com Crédito'>Casa Própria com Crédito</MenuItem>
                            <MenuItem value='Casa de Familiares'>Casa de Familiares</MenuItem>
                            <MenuItem value='Casa Arrendada'>Casa Arrendada</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='mb-6'>
                    <FormControl required sx={{width: '100%', '& .MuiFormLabel-asterisk': {color: 'red'}}}>
                        <InputLabel id="label-1">Chegou até nós pelo...</InputLabel>
                        <Select
                            name='Chegou até nós pelo...'
                            required
                            labelId="label-1"
                            id="select-1"
                            label="Chegou até nós pelo... *"
                            defaultValue=''
                            onChange={props.handleInputChange}
                        >
                            <MenuItem value="">
                                Selecionar opção
                            </MenuItem>

                            <MenuItem value='Facebook'>Facebook</MenuItem>
                            <MenuItem value='Instagram'>Instagram</MenuItem>
                            <MenuItem value='Tik Tok'>Tik Tok</MenuItem>
                            <MenuItem value='Pesquisa Google'>Pesquisa Google</MenuItem>
                            <MenuItem value='Youtube'>Youtube</MenuItem>
                            <MenuItem value='Linkedin'>Linkedin</MenuItem>
                            <MenuItem value='Indicado por um Amigo'>Indicado por um Amigo</MenuItem>
                            <MenuItem value='Email'>Email</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {props.children}
            </form>
        </>
    )
}

export default StepFinal
