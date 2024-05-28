import {useEffect, useState} from 'react'
import '../App.css'
import {TextField} from "@mui/material";
import {Result} from "./result.tsx";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function App() {
  const [propertyLocation, setPropertyLocation] = useState('');
  const [propertyPurpose, setPropertyPurpose] = useState('');
  const [propertyPrice, setPropertyPrice] = useState<string>('');

  const [IMT, setIMT] = useState(0);
  const [stampTax, setStampTax] = useState(0);
  const [total, setTotal] = useState(0);

  const propertyPurposesPortugal = [
      'Habitação Própria & Permanente',
      'Habitação secundária ou arrendamento',
      'Prédios rústicos',
      'Prédios urbanos e outras aquisições onerosas',
      'Adquirente (exceto particulares) residente em paraíso fiscal ou em território em que o regime fiscal é mais favorável',
      'Entidade dominada ou controlada, direta ou indiretamente, por entidade com domicílio em paraíso fiscal ou em território em que o regime fiscal é mais favorável.'
  ];

  const portugalRanges = [
      [
          {min: 0, max: 101917, tax: 0, discount: 0},
          {min: 101917, max: 138412, tax: 2, discount: 2038.34},
          {min: 139412, max: 190086, tax: 5, discount: 6220.7},
          {min: 190086, max: 316772, tax: 7, discount: 10022.42},
          {min: 316772, max: 633453, tax: 8, discount: 13190.14},
          {min: 633453, max: 1102920, tax: 6, discount: 0},
          {min: 1102920, max: Number.POSITIVE_INFINITY, tax: 7.5, discount: 0}
      ],
      [
          {min: 0, max: 101917, tax: 1, discount: 0},
          {min: 101917, max: 138412, tax: 2, discount: 1019.17},
          {min: 139412, max: 190086, tax: 5, discount: 5201.53},
          {min: 190086, max: 316772, tax: 7, discount: 9003.25},
          {min: 316772, max: 607528, tax: 8, discount: 12170.97},
          {min: 607528, max: 1102920, tax: 6, discount: 0},
          {min: 1102920, max: Number.POSITIVE_INFINITY, tax: 7.5, discount: 0}
      ],
      [{min: 0, max: 0, tax: 5, discount: 0}],
      [{min: 0, max: 0, tax: 6.5, discount: 0}],
      [{min: 0, max: 0, tax: 10, discount: 0}],
      [{min: 0, max: 0, tax: 10, discount: 0}]
  ];

  const propertyPurposesRegion = [
      'Habitação Própria & Permanente',
      'Habitação secundária ou arrendamento',
      'Prédios rústicos',
      'Prédios urbanos e outras aquisições onerosas',
      'Adquirente (exceto particulares) residente em paraíso fiscal ou em território em que o regime fiscal é mais favorável',
      'Entidade dominada ou controlada, direta ou indiretamente, por entidade com domicílio em paraíso fiscal ou em território em que o regime fiscal é mais favorável.'
  ];

    const regionRanges = [
        [
            {min: 0, max: 127396.25, tax: 0, discount: 0},
            {min: 127396.25, max: 174265, tax: 2, discount: 2547.93},
            {min: 174265, max: 237607.5, tax: 5, discount: 7775.88},
            {min: 237607.5, max: 395965, tax: 7, discount: 12528.03},
            {min: 395965, max: 791816.25, tax: 8, discount: 16487.67},
            {min: 791816.25, max: 1378650, tax: 6, discount: 0},
            {min: 1378650, max: Number.POSITIVE_INFINITY, tax: 7.5, discount: 0}
        ],
        [
            {min: 0, max: 127396.25, tax: 1, discount: 0},
            {min: 127396.25, max: 174265, tax: 2, discount: 1273.96},
            {min: 174265, max: 237607.5, tax: 5, discount: 6501.91},
            {min: 237607.5, max: 395965, tax: 7, discount: 11254.06},
            {min: 395965, max: 759410, tax: 8, discount: 15213.71},
            {min: 759410, max: 1378650, tax: 6, discount: 0},
            {min: 1378650, max: Number.POSITIVE_INFINITY, tax: 7.5, discount: 0}
        ],
        [{min: 0, max: 0, tax: 5, discount: 0}],
        [{min: 0, max: 0, tax: 6.5, discount: 0}],
        [{min: 0, max: 0, tax: 10, discount: 0}],
        [{min: 0, max: 0, tax: 10, discount: 0}]
    ];

    useEffect(() => {
        setPropertyPurpose('');
    }, [propertyLocation])

  useEffect(() => {
      setIMT(0);
      setStampTax(0);
      setTotal(0);

      if (propertyLocation !== '' && propertyPurpose !== '' && propertyPrice) {
          setStampTax(+propertyPrice * 0.008);


          let ranges = propertyLocation == 'portugal' ? portugalRanges : regionRanges;
          console.log(+propertyPurpose);
          //@ts-ignore
          ranges = ranges[+propertyPurpose];

          if (ranges.length > 1) {
              for (const range of ranges) {
                  //@ts-ignore
                  if (+propertyPrice >= range.min && +propertyPrice <= range.max) {
                      //@ts-ignore
                      const IMTValue = (+propertyPrice * (range.tax / 100)) - range.discount;
                      setIMT(IMTValue);
                      break;
                  }
              }
          } else {
              //@ts-ignore
              const IMTValue = (+propertyPrice * (ranges[0].tax / 100)) - ranges[0].discount;
              setIMT(IMTValue);
          }


          if (IMT && stampTax) {
              setTotal(IMT + stampTax);
          }
      }
  });


  return (
    <>
        <form action="#" className="p-12 flex flex-col" id="simulator-form">
            <div className={'flex gap-x-[10%] gap-y-[1vh] mb-4 overflow-hidden flex-col'}>
                <div className={'w-[100%]'}>
                    <h1 className="font-bold text-[#083649] text-2xl mb-4">Local do Imóvel</h1>
                    <FormControl fullWidth>
                        <Select
                            sx={{minWidth: '15rem'}}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={propertyLocation}
                            onChange={(e) => {setPropertyLocation(e.target.value)}}
                        >
                            <MenuItem value='portugal'>Portugal Continental</MenuItem>
                            <MenuItem value='region'>Regiões Autónomas</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className={'w-[100%]'}>
                    <h1 className="font-bold text-[#083649] text-2xl mb-4">Finalidade do imóvel</h1>
                    <FormControl fullWidth>
                        <Select
                            disabled={!propertyLocation}
                            sx={{minWidth: '15rem'}}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={propertyPurpose}
                            onChange={(e) => {setPropertyPurpose(e.target.value)}}
                        >
                            {propertyLocation === 'portugal' && propertyPurposesPortugal.map((value, index) => {
                                return (
                                    <MenuItem key={index} value={index}>{value}</MenuItem>
                                );
                            })}
                            {propertyLocation === 'region' && propertyPurposesRegion.map((value, index) => {
                                return (
                                    <MenuItem key={index} value={index}>{value}</MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <h1 className="font-bold text-[#083649] text-2xl mb-4">Preço do Imóvel</h1>
            <TextField
                type={'number'}
                autoComplete='off'
                onChange={(e) => setPropertyPrice(e.target.value)}
                value={propertyPrice}
                id="net_income"
                fullWidth
            />
            <Result IMT={IMT} stampTax={stampTax} total={total} />
        </form>
    </>
  )
}

export default App
