import '../App.css'
import {useEffect, useState} from "react";
import {Dayjs} from "dayjs";
import axios from "axios";
import StepOne from "./StepOne.tsx";
import StepTwo from "./StepTwo.tsx";
import StepThree from "./StepThree.tsx";
import StepFinal from "./StepFInal.tsx";

function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const [collectedData, setCollectedData] = useState({});

    const [propertyPrice, setPropertyPrice] = useState(0);
    const [financeValue, setFinanceValue] = useState(0);
    const [peopleAmount, setPeopleAmount] = useState(1);
    const [person1Age, setPerson1Age] = useState<Dayjs | null>(null);
    const [person2Age, setPerson2Age] = useState<Dayjs | null>(null);
    const [financeDeadline, setFinanceDeadline] = useState(0);

    const [financeDeadlineLimit, setFinanceDeadlineLimit] = useState(40);
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    useEffect(() => {
        localStorage.removeItem('collected_form_data');
    }, []);

    const handleStepRewind = (e: any) => {
        e.preventDefault();
        setCurrentPage(currentPage - 1);
    };

    //@ts-ignore
    const handleStepSubmit = (e: any) => {
        e.preventDefault();

        //@ts-ignore
        if (currentPage === 4) {
            axios.post( import.meta.env.VITE_BASE_API_URL + '/collect-form-data/simulator2', JSON.stringify(collectedData), {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(() => {
                window.location.href = 'https://jpcreditoeseguros.pt/obrigadochabitacao/';
            });
        }

        if (currentPage < 4) {
            setCurrentPage(currentPage + 1);
        }
    };

    //@ts-ignore
    const handleInputChange = (e) => {
        let newCollectedData = {...collectedData};
        //@ts-ignore
        newCollectedData[e.target.name] = e.target.value;
        setCollectedData(newCollectedData);
        console.log(collectedData);
    };

    const concatFormData = (formData: Object) => {
        setCollectedData({...collectedData, ...formData});
    }


    const getCurrentPage = () => {
        switch (currentPage) {
            case 1:
                return <StepOne
                    propertyPrice={propertyPrice}
                    financeValue={financeValue}
                    peopleAmount={peopleAmount}
                    person1Age={person1Age}
                    person2Age={person2Age}
                    financeDeadline={financeDeadline}
                    financeDeadlineLimit={financeDeadlineLimit}
                    monthlyPayment={monthlyPayment}
                    setPropertyPrice={setPropertyPrice}
                    setFinanceValue={setFinanceValue}
                    setPeopleAmount={setPeopleAmount}
                    setPerson1Age={setPerson1Age}
                    setPerson2Age={setPerson2Age}
                    setFinanceDeadline={setFinanceDeadline}
                    setFinanceDeadlineLimit={setFinanceDeadlineLimit}
                    setMonthlyPayment={setMonthlyPayment}
                    handleStepSubmit={handleStepSubmit}
                />
            case 2:
                return <StepTwo collectedData={collectedData} handleStepSubmit={handleStepSubmit} handleInputChange={handleInputChange}>
                    <div className='flex gap-x-4'>
                        <button className='px-5 py-3 bg-[#FEBF02] rounded text-white w-[20rem]' onClick={handleStepRewind}>Previo</button>
                        <button className='px-5 py-3 bg-[#FEBF02] rounded text-white w-[20rem]'>Próximo</button>
                    </div>
                </StepTwo>;
            case 3:
                return <StepThree collectedData={collectedData} handleStepSubmit={handleStepSubmit} handleInputChange={handleInputChange}>
                    <div className='flex gap-x-4'>
                        <button className='px-5 py-3 bg-[#FEBF02] rounded text-white w-[20rem]'
                                onClick={handleStepRewind}>Previo</button>
                        <button className='px-5 py-3 bg-[#FEBF02] rounded text-white w-[20rem]'>Próximo</button>
                    </div>
                </StepThree>;
            case 4:
                return <StepFinal collectedData={collectedData} handleStepSubmit={handleStepSubmit}
                                  concatFormData={concatFormData}>
                    <div className='flex gap-x-4'>
                        <button className='px-5 py-3 bg-[#FEBF02] rounded text-white w-[20rem]' onClick={handleStepRewind}>Previo</button>
                        <button className='px-5 py-3 bg-[#FEBF02] rounded text-white w-[20rem]'>Próximo</button>
                    </div>
                </StepFinal>;
        }
    };


    return getCurrentPage();
}

export default App
