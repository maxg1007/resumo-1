import React, { Component } from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Materia from "./screens/materia";
import Resumo from "./screens/resumo";
import CriarResumo from "./screens/criarResumo";
import CriarMateria from "./screens/criarMateria";
import LerResumo from "./screens/lerResumo";

const Stack = createStackNavigator();

export default class StackNavigator extends Component {
  render() {
    return (
      <StackNavigator>
        <Stack.Screen name="materia" component={Materia} />
        <Stack.Screen name="resumo" component={Resumo} />
        <Stack.Screen name="criarResumo" component={CriarResumo} />
        <Stack.Screen name="criarMateria" component={CriarMateria} />
        <Stack.Screen name="lerResumo" component={LerResumo} />
      </StackNavigator>
    );
  }
}
