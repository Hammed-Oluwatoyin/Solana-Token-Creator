import React, { FC } from 'react'
import dynamic from "next/dynamic";

//INTERNAL IMPORT
import {useNetworkConfiguration} from "../contexts/NetworkConfigurationProvider"


const NetworkSwitcher: FC = () => {
  const { networkConfiguration, setNetworkConfiguration } =useNetworkConfiguration();


  return (
    <>
      <input type="checkbox" id="checkbox" />
        <label className="switch ">
        <select
         value={networkConfiguration}
         onChange={(e) => setNetworkConfiguration(e.target.value || "devnet")}
         className="select max-w-xs border-none rounded  bg-default-100/5 outline-0"
        >
          <option className=" switch" value="mainnet-beta">mainnet</option>
          <option className=" switch"  value="devnet">devnet</option>
          <option className=" switch"  value="testnet">testnet</option>
        </select>
        </label>
      
    </>
  )
}

export default dynamic(()=> Promise.resolve(NetworkSwitcher), {ssr:false});