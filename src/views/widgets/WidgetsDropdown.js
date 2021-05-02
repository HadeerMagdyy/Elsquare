import React,{useState, useEffect} from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'
import axios from 'axios';  
const WidgetsDropdown = () => {
  // render
  const [MaxCurrent, setMaxCurrent] = useState([])
  const [AvgCurrent, setAvgCurrent] = useState([])
  const [MaxVoltage, setMaxVoltage] = useState([])
  const [AvgVoltage, setAvgVoltage] = useState([])

  const [TotalConsum, setTotalConsum] = useState([])
  const [AvgConsum, setAvgConsum] = useState([])
  const [HighConsum, setHighConsum] = useState([])
  const [LowConSum, setLowConSum] = useState([])

  useEffect(() => {
    axios.get('https://localhost:44327/Api/Data/AvgVoltage').then(response => {  
        console.log(response.data); 
        setAvgVoltage(response.data);    
}); 
    
}, [])

useEffect(() => {
    axios.get('https://localhost:44327/Api/Data/MaxVoltage').then(response => {  
        console.log(response.data);    
        setMaxVoltage(response.data);    
}); 
    
}, [])
useEffect(() => {
    axios.get('https://localhost:44327/Api/Data/AvgCurrent').then(response => {  
        console.log(response.data);    
        setAvgCurrent(response.data);    
}); 
    
}, [])
useEffect(() => {
    axios.get('https://localhost:44327/Api/Data/MaxCurrent').then(response => {  
        console.log(response.data);  
        setMaxCurrent(response.data);      
}); 
    
}, [])


useEffect(() => {
  axios.get('https://localhost:44327/Api/Data/TotalConsum').then(response => {  
      setTotalConsum(response.data);    
}); 
  
}, [])

useEffect(() => {
  axios.get('https://localhost:44327/Api/Data/AvgConsum').then(response => {  
      console.log(response.data);    
      setAvgConsum(response.data);    
}); 
  
}, [])
useEffect(() => {
  axios.get('https://localhost:44327/Api/Data/HighConsum').then(response => {  
      console.log(response.data);    
      setHighConsum(response.data);    
}); 
  
}, [])
useEffect(() => {
  axios.get('https://localhost:44327/Api/Data/LowConsum').then(response => {  
      console.log(response.data);  
      setLowConSum(response.data);      
}); 
  
}, [])
  return (
    <CRow>
      
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header="Total Consumption"
          text={<h5>{parseFloat(TotalConsum).toFixed(2)} (Kmh)</h5>}
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="warning"
              label="Total Consumption"
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          text= {<h5>{MaxVoltage} V<h6>Max voltage</h6> {parseFloat(AvgVoltage).toFixed(2)} V <h6>Avg voltage</h6></h5>}
          footerSlot={
            <ChartLineSimple
              line
              className="c-chart-wrapper mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[65, 59, 84, 84, 51, 55, 40]}
              pointHoverBackgroundColor="primary"
              label="Voltage"
              labels="ha"
            />
            
            
          }
          
        >
          <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
           text= {<h5>{MaxCurrent} A<h6>Max Current</h6> {parseFloat(AvgCurrent).toFixed(2)} A <h6>Avg Current</h6></h5>}

          footerSlot={
            <ChartLineSimple
              pointed
              className="mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[1, 18, 9, 17, 34, 22, 11]}
              pointHoverBackgroundColor="info"
              options={{ elements: { line: { tension: 0.00001 }}}}
              label="Members"
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle caret={false} color="transparent">
              <CIcon name="cil-location-pin"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>


      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          text= {<h5>{parseFloat(AvgConsum).toFixed(4)} (Kmh)<h6>Avg Consumption</h6> {parseFloat(HighConsum).toFixed(4)} (Kmh) <h6>Highest Consumption</h6> {LowConSum} (Kmh) <h6>Lowest Consumption</h6></h5>}
          footerSlot={
            <ChartBarSimple
              className="mt-3 mx-3"
              style={{height: '70px'}}
              backgroundColor="rgb(250, 152, 152)"
              label="Members"
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle caret className="text-white" color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
