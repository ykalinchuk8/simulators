import '../App.css'
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from '@mui/material/TextField';

function StepThree(props: any) {
    return (
        <>
            <form action="#" className="p-12 flex flex-col" id="simulator-form-multistep"
                  onSubmit={props.handleStepSubmit}>
                <div className='mb-6 flex gap-5'>
                    <TextField
                        sx={{width: '50%'}}
                        name='Primeiro Nome'
                        required
                        id="outlined-required"
                        label="Primeiro Nome"
                        defaultValue=""
                        onChange={props.handleInputChange}
                    />
                    <TextField
                        sx={{width: '50%'}}
                        name='Último nome'
                        required
                        id="outlined-required"
                        label="Último nome"
                        defaultValue=""
                        onChange={props.handleInputChange}
                    />
                </div>
                <div className='mb-6'>
                    <TextField
                        sx={{width: '100%'}}
                        name='Telemóvel'
                        required
                        id="outlined-required"
                        label="Telemóvel"
                        defaultValue=""
                        onChange={props.handleInputChange}
                    />
                </div>
                <div className='mb-6'>
                    <TextField
                        sx={{width: '100%'}}
                        name='Email'
                        required
                        id="outlined-required"
                        label="Email"
                        defaultValue=""
                        onChange={props.handleInputChange}
                    />
                </div>
                <div className='mb-6'>
                    <TextField
                        sx={{width: '100%'}}
                        name='N.° de contribuinte (NIF)'
                        required
                        id="outlined-required"
                        label="N.° de contribuinte (NIF)"
                        defaultValue=""
                        onChange={props.handleInputChange}
                    />
                </div>
                <div className='mb-6'>
                    <FormControl required sx={{width: '100%', '& .MuiFormLabel-asterisk': {color: 'red'}}}>
                        <InputLabel id="label-1">Documento de Identificação</InputLabel>
                        <Select
                            name='Documento de Identificação'
                            required
                            labelId="label-1"
                            id="select-1"
                            label="Documento de Identificação *"
                            defaultValue=''
                            onChange={props.handleInputChange}
                        >
                            <MenuItem value="">
                                Selecionar opção
                            </MenuItem>
                            <MenuItem value='Cartão de Cidadão Português'>Cartão de Cidadão Português</MenuItem>
                            <MenuItem value='Título de Residência Permanente'>Título de Residência Permanente</MenuItem>
                            <MenuItem value='Título de Residência Temporário'>Título de Residência Temporário</MenuItem>
                            <MenuItem value='Identificação da Zona EURO'>Identificação da Zona EURO</MenuItem>
                            <MenuItem value='Passaporte'>Passaporte</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='mb-6'>
                    <FormControl required sx={{width: '100%', '& .MuiFormLabel-asterisk': {color: 'red'}}}>
                        <InputLabel id="label-1">Estado civil</InputLabel>
                        <Select
                            name='Estado civil'
                            required
                            labelId="label-1"
                            id="select-1"
                            label="Documento de Identificação *"
                            defaultValue=''
                            onChange={props.handleInputChange}
                        >
                            <MenuItem value="">
                                Selecionar opção
                            </MenuItem>
                            <MenuItem value='Cartão de Cidadão Português'>Casado (a)</MenuItem>
                            <MenuItem value='Viúvo(a)'>Viúvo(a)</MenuItem>
                            <MenuItem value='União de Facto'>União de Facto</MenuItem>
                            <MenuItem value='Divorciado (a)'>Divorciado (a)</MenuItem>
                            <MenuItem value='Separado de facto'>Separado de facto</MenuItem>
                            <MenuItem value='Solteiro(a)'>Solteiro(a)</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='mb-6'>
                    <FormControl required sx={{width: '100%', '& .MuiFormLabel-asterisk': {color: 'red'}}}>
                        <InputLabel id="label-1">Situação Profissional</InputLabel>
                        <Select
                            name='Situação Profissional'
                            required
                            labelId="label-1"
                            id="select-1"
                            label="Situação Profissional *"
                            defaultValue=''
                            onChange={props.handleInputChange}
                        >
                            <MenuItem value="">
                                Selecionar opção
                            </MenuItem>
                            <MenuItem value='Contrato sem termo/Efetivo'>Contrato sem termo/Efetivo</MenuItem>
                            <MenuItem value='Contrato Temporário'>Contrato Temporário</MenuItem>
                            <MenuItem value='Contrato a Prazo'>Contrato a Prazo</MenuItem>
                            <MenuItem value='Contrato por tempo indeterminado'>Contrato por tempo
                                indeterminado</MenuItem>
                            <MenuItem value='Trabalhador Independente'>Trabalhador Independente</MenuItem>
                            <MenuItem value='Reformado'>Reformado</MenuItem>
                            <MenuItem value='Pensionista'>Pensionista</MenuItem>
                            <MenuItem value='Desempregado'>Desempregado</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='mb-6'>
                    <FormControl required sx={{width: '100%', '& .MuiFormLabel-asterisk': {color: 'red'}}}>
                        <InputLabel id="label-1">Trabalha na Atual Empresa à Quantos anos?</InputLabel>
                        <Select
                            name='Trabalha na Atual Empresa à Quantos anos?'
                            required
                            labelId="label-1"
                            id="select-1"
                            label="Trabalha na Atual Empresa à Quantos anos? *"
                            defaultValue=''
                            onChange={props.handleInputChange}
                        >
                            <MenuItem value="">
                                Selecionar opção
                            </MenuItem>

                            <MenuItem value='menos de 1'>menos de 1</MenuItem>
                            <MenuItem value='1 ano'>1 ano</MenuItem>
                            <MenuItem value='2 anos'>2 anos</MenuItem>
                            <MenuItem value='3 anos'>3 anos</MenuItem>
                            <MenuItem value='4 anos'>4 anos</MenuItem>
                            <MenuItem value='5 anos'>5 anos</MenuItem>
                            <MenuItem value='6 anos'>6 anos</MenuItem>
                            <MenuItem value='7 anos'>7 anos</MenuItem>
                            <MenuItem value='8 anos'>8 anos</MenuItem>
                            <MenuItem value='9 anos'>9 anos</MenuItem>
                            <MenuItem value='10 anos'>10 anos</MenuItem>
                            <MenuItem value='mais de 10 anos'>mais de 10 anos</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='mb-6'>
                    <FormControl required sx={{width: '100%', '& .MuiFormLabel-asterisk': {color: 'red'}}}>
                        <InputLabel id="label-1">Distrito</InputLabel>
                        <Select
                            name='Distrito'
                            required
                            labelId="label-1"
                            id="select-1"
                            label="Distrito *"
                            defaultValue=''
                            onChange={props.handleInputChange}
                        >
                            <MenuItem value="">
                                Selecionar opção
                            </MenuItem>

                            <MenuItem value=''>Selecionar opção</MenuItem>


                            <MenuItem value='Viana do Castelo'>Viana do Castelo</MenuItem>
                            <MenuItem value='Braga'>Braga</MenuItem>
                            <MenuItem value='Porto'>Porto</MenuItem>
                            <MenuItem value='Lisboa'>Lisboa</MenuItem>
                            <MenuItem value='Setúbal'>Setúbal</MenuItem>
                            <MenuItem value='Aveiro'>Aveiro</MenuItem>
                            <MenuItem value='Faro'>Faro</MenuItem>
                            <MenuItem value='Leiria'>Leiria</MenuItem>
                            <MenuItem value='Coimbra'>Coimbra</MenuItem>
                            <MenuItem value='Santarem'>Santarem</MenuItem>
                            <MenuItem value='Viseu'>Viseu</MenuItem>
                            <MenuItem value='Madeira'>Madeira</MenuItem>
                            <MenuItem value='Açores'>Açores</MenuItem>
                            <MenuItem value='Vila Real'>Vila Real</MenuItem>
                            <MenuItem value='Castelo Branco'>Castelo Branco</MenuItem>
                            <MenuItem value='Évora'>Évora</MenuItem>
                            <MenuItem value='Guarda'>Guarda</MenuItem>
                            <MenuItem value='Beja'>Beja</MenuItem>
                            <MenuItem value='Bragança'>Bragança</MenuItem>
                            <MenuItem value='Portalegre'>Portalegre</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {props.children}
            </form>
        </>
    )
}

export default StepThree
