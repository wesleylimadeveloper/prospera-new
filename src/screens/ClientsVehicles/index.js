import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

import Button from '../../components/Button'
import { styles } from './styles'
import { theme } from '../../global/styles/theme';

export default function ClientsVehicle() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.iconsWrapper}>
                <Ionicons
                    color={theme.colors.icon}
                    name='md-person-circle-sharp'
                    size={100}
                />
                <Ionicons
                    color={theme.colors.icon}
                    name='car-sport-sharp'
                    size={100}
                />
            </View>

            <Button
                onPress={() => navigation.navigate("Clients")}
                title='Consultar cliente'
            />

            <Button
                onPress={() => navigation.navigate("ClientRegistration")}
                title='Cadastrar cliente'
            />

            <Button
                onPress={() => navigation.navigate("Vehicles")}
                title='Consultar veículo'
            />
        </View>
    )
}