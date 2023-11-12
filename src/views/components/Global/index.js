import { Grid } from '@mantine/core'
import React from 'react'
import AppBar from "./AppBar"
import Navbar from "./Navbar"
import Drawer from "./Drawer"
import SideAppBar from "./SideAppBar"

const index = () => {
  return (
    <Grid>
        <Grid.Col span={3}><AppBar /></Grid.Col>
        <Grid.Col span={3}><Navbar /></Grid.Col>
        <Grid.Col span={3}><Drawer /></Grid.Col>
        <Grid.Col span={3}><SideAppBar /></Grid.Col>
    </Grid>
  )
}

export default index