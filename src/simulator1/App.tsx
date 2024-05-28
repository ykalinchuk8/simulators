import {useEffect, useState} from 'react'
import '../App.css'
import {InputAdornment, TextField} from "@mui/material";
import {Result} from "./result.tsx";

function App() {
  const [netIncome, setNetIncome] = useState(0);
  const [housingLoan, setHousingLoan] = useState('');
  const [carLoan, setCarLoan] = useState('');
  const [personalLoan, setPersonalLoan] = useState('');
  const [otherCreditCharges, setOtherCreditCharges] = useState('');
  const [creditResult, setCreditResult] = useState('');

  const settersMap = {
      setNetIncome,
      setHousingLoan,
      setCarLoan,
      setPersonalLoan,
      setOtherCreditCharges
  };


  const setFormValue = function (value: any, fieldName: any) {
      if (!isNaN(value)) {
          // @ts-ignore
          settersMap[`set${fieldName}`](value || '');
      }
  }

  useEffect(() => {
      if (housingLoan !== '' || carLoan !== '' || personalLoan !== '' || otherCreditCharges !== '') {
          let creditResultLocal = Math.round(((+housingLoan + +carLoan + +personalLoan + +otherCreditCharges) * 100) / netIncome);
          // @ts-ignore
          setCreditResult(creditResultLocal);
      }
  })

  return (
    <>
        <form action="#" className="p-12 flex flex-col" id="simulator-form">
            <h1 className="font-bold text-[#083649] text-3xl">Rendimentos Mensais</h1>
            <h3 className="text-[#083649] text-sm mb-3">Rendimento mensal líquido</h3>

            <TextField
                label="Rendimento Líquido"
                onChange={(e) => setFormValue(e.target.value, 'NetIncome')}
                value={netIncome}
                id="net_income"
                fullWidth
                sx={{ m: 1 }}
                InputProps={{
                    endAdornment: <InputAdornment position="start">€</InputAdornment>,
                }}
            />
            <h1 className="font-bold text-[#083649] text-3xl mt-10 mb-4">Despesas Mensais</h1>
            <TextField
                label="Crédito Habitação"
                onChange={(e) => setFormValue(e.target.value, 'HousingLoan')}
                value={housingLoan}
                id="housing_loan"
                fullWidth
                sx={{ m: 1 }}
                InputProps={{
                    endAdornment: <InputAdornment position="start">€</InputAdornment>,
                }}
            />
            <TextField
                label="Crédito Automóvel"
                onChange={(e) => setFormValue(e.target.value, 'CarLoan')}
                value={carLoan}
                id="car_loan"
                fullWidth
                sx={{ m: 1 }}
                InputProps={{
                    endAdornment: <InputAdornment position="start">€</InputAdornment>,
                }}
            />
            <TextField
                label="Crédito Pessoal"
                onChange={(e) => setFormValue(e.target.value, 'PersonalLoan')}
                value={personalLoan}
                id="personal_loan"
                fullWidth
                sx={{ m: 1 }}
                InputProps={{
                    endAdornment: <InputAdornment position="start">€</InputAdornment>,
                }}
            />
            <TextField
                label="Outros Créditos e Encargos"
                onChange={(e) => setFormValue(e.target.value, 'OtherCreditCharges')}
                value={otherCreditCharges}
                id="other_credit_charges"
                fullWidth
                sx={{ m: 1 }}
                InputProps={{
                    endAdornment: <InputAdornment position="start">€</InputAdornment>,
                }}
            />
            <Result value={creditResult} isHousingLoanSet={!!+housingLoan} isOtherCreditsSet={personalLoan && carLoan && otherCreditCharges}  />
        </form>
    </>
  )
}

export default App
