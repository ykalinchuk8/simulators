import '../App.css'
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


function StepTwo(props: any) {
    return (
        <>
            <form action="#" className="p-12 flex flex-col" id="simulator-form-multistep"
                  onSubmit={props.handleStepSubmit}>
                <div className='mb-6'>
                    <FormControl required sx={{width: '100%', '& .MuiFormLabel-asterisk': {color: 'red'}}}>
                        <InputLabel id="label-1">Tem incidentes no Banco de Portugal?</InputLabel>
                        <Select
                            name='Tem incidentes no Banco de Portugal'
                            required
                            labelId="label-1"
                            id="select-1"
                            label="Tem incidentes no Banco de Portugal? *"
                            value={props.collectedData['Tem incidentes no Banco de Portugal'] ?? ''}
                            onChange={props.handleInputChange}
                        >
                            <MenuItem value="">
                                Selecionar opção
                            </MenuItem>
                            <MenuItem value='Sim'>Sim</MenuItem>
                            <MenuItem value='Não'>Não</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='mb-6'>
                    <FormControl required sx={{width: '100%', '& .MuiFormLabel-asterisk': {color: 'red'}}}>
                        <InputLabel id="label-2">O imóvel destina-se a habitação principal ou secundária?</InputLabel>
                        <Select
                            name='O imóvel destina-se a habitação principal ou secundária'
                            required
                            labelId="label-2"
                            id="select-2"
                            label="O imóvel destina-se a habitação principal ou secundária? *"
                            value={props.collectedData['O imóvel destina-se a habitação principal ou secundária'] ?? ''}
                            onChange={props.handleInputChange}
                        >
                            <MenuItem value="">
                                Selecionar opção
                            </MenuItem>
                            <MenuItem value='Habitação Principal'>Habitação Principal</MenuItem>
                            <MenuItem value='Habitação Secundária'>Habitação Secundária</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='mb-6'>
                    <FormControl required sx={{width: '100%', '& .MuiFormLabel-asterisk': {color: 'red'}}}>
                        <InputLabel id="label-3">Qual é o tipo de taxa que prefere?</InputLabel>
                        <Select
                            name='Qual é o tipo de taxa que prefere'
                            required
                            labelId="label-3"
                            id="select-3"
                            label="Qual é o tipo de taxa que prefere? *"
                            value={props.collectedData['Qual é o tipo de taxa que prefere'] ?? ''}
                            onChange={props.handleInputChange}
                        >
                            <MenuItem value="">
                                Selecionar opção
                            </MenuItem>
                            <MenuItem value='Taxa Variavel'>Taxa Variavel</MenuItem>
                            <MenuItem value='Taxa Mista'>Taxa Mista</MenuItem>
                            <MenuItem value='Taxa Fixa'>Taxa Fixa</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='mb-6'>
                    <FormControl required sx={{width: '100%', '& .MuiFormLabel-asterisk': {color: 'red'}}}>
                        <InputLabel id="label-4">Veste momento já tem o imóvel que deseja comprar
                            escolhido?</InputLabel>
                        <Select
                            name='Veste momento já tem o imóvel que deseja comprar escolhido'
                            required
                            labelId="label-4"
                            id="select-4"
                            label="Veste momento já tem o imóvel que deseja comprar escolhido? *"
                            value={props.collectedData['Veste momento já tem o imóvel que deseja comprar escolhido'] ?? ''}
                            onChange={props.handleInputChange}
                        >
                            <MenuItem value="">
                                Selecionar opção
                            </MenuItem>
                            <MenuItem value='Sim, já tenho o imóvel escolhido e já paguei o sinal'>Sim, já tenho o
                                imóvel escolhido e já paguei o sinal</MenuItem>
                            <MenuItem value='Sim, já tenho o imóvel escolhido, mas ainda não paguei o sinal'>Sim, já
                                tenho o imóvel escolhido, mas ainda não paguei o sinal</MenuItem>
                            <MenuItem value='Não, ainda não tenho o imóvel escolhido'>Não, ainda não tenho o imóvel
                                escolhido</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='mb-6'>
                    <FormControl required sx={{width: '100%', '& .MuiFormLabel-asterisk': {color: 'red'}}}>
                        <InputLabel id="label-5">Tem pelo menos 10% do valor da compra do imóvel para dar de
                            entrada?</InputLabel>
                        <Select
                            name='Tem pelo menos 10% do valor da compra do imóvel para dar de entrada'
                            required
                            labelId="label-5"
                            id="select-5"
                            label="Tem pelo menos 10% do valor da compra do imóvel para dar de entrada? *"
                            value={props.collectedData['Tem pelo menos 10% do valor da compra do imóvel para dar de entrada'] ?? ''}
                            onChange={props.handleInputChange}
                        >
                            <MenuItem value="">
                                Selecionar opção
                            </MenuItem>
                            <MenuItem value='Sim'>Sim</MenuItem>
                            <MenuItem value='Nลืo'>Nลืo</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {props.children}
            </form>
        </>
    )
}

export default StepTwo
