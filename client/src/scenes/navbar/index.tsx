import { useState } from 'react'
import { Link } from "react-router-dom"
import { Box, Typography, useTheme } from "@mui/material"
import FlexBetween from '@/components/FlexBetween'

import TollIcon from '@mui/icons-material/Toll';

type Props = {}

const Navbar = (props: Props) => {
    const { palette } = useTheme()
    const [selected, setselected] = useState("dashboard")
  return (
    <FlexBetween 
    mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
        {/*LEFT SIDE*/}
        <FlexBetween gap="0.75rem">
          <TollIcon sx={{ fontsize: "28px"}}/>
          <Typography variant="h4" fontSize="16px"></Typography>
          Finanseer
          </FlexBetween> 

          {/*RIGHT SIDE*/}
          <FlexBetween gap="2rem">
            <Box sx={{ "&:hover": { color: palette.primary[100]}}}>
            <Link to="/" onClick={() => setselected("dashboard")}style={{color: selected === "dashboard" ? "inherit": palette.grey[700], textDecoration: "inherit"}}>
            dashboard</Link></Box>

            <Box sx={{ "&:hover": { color: palette.primary[100]}}}>
            <Link to="/predictions" onClick={() => setselected("predictions")}style={{color: selected === "predictions" ? "inherit": palette.grey[700], textDecoration: "inherit"}}>
            predictions</Link></Box>         
          </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar