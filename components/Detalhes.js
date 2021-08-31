import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Detalhes({ route, navigation }) {
    const { item } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.pacienteContainer}>
                <View style={styles.carteirinha}>
                    <View style={styles.bodyCarteirinha}>
                        <View style={styles.headerCarteirinha}>
                            <View style={item.statuscovid == 'positivo'?  styles.faixaRed : item.statuscovid == 'negativo'? styles.faixaGreen : styles.faixaYellow}></View>
                            <Text style={styles.name}>{item.nome}</Text>
                            <View style={styles.textContainer}>
                                <Text style={styles.textBold}>Sintomas: </Text>
                                <Text style={styles.text}>{item.sintomas}</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.textBold}>Doencas Pre-existentes: </Text>
                                <Text style={styles.text}>{item.doenca_preexitente}</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.textBold}>Status COVID: </Text>
                                <Text style={item.statuscovid == 'positivo'?  styles.statusRed : item.statuscovid == 'negativo'? styles.statusGreen : styles.statusYellow}>{item.statuscovid}</Text>
                            </View>
                        </View>
                        <Text style={styles.dataAtendimento}>{`${item.data_atendimento}`}</Text>
                    </View>
                    <View>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.button}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    faixaRed: {
        backgroundColor: 'red',
        height: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    faixaGreen: {
        backgroundColor: 'green',
        height: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    faixaYellow: {
        backgroundColor: 'orange',
        height: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    textContainer: {
        flexDirection: 'row'
    },
    textBold: {
        marginTop: 10,
        fontWeight: 'bold',
    },
    statusRed:{
        color: 'red',
        marginTop: 10,
    },
    statusGreen:{
        color: 'green',
        marginTop: 10,
    },
    statusYellow:{
        color: 'orange',
        marginTop: 10,
    },
    text: {
        marginTop: 10,
    },
    headerCarteirinha: {
        padding: 10
    },
    dataAtendimento: {
        width: 10,
    },
    bodyCarteirinha: {
        flexDirection: 'row',
    },
    carteirinha: {
        borderRadius: 15,
        backgroundColor: '#F9F9F9',
        padding: 10
    },
    name: {
        padding: 7,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: '#EDEDED',
        fontSize: 20,
        fontWeight: 'bold'
    },
    pacienteContainer: {
        justifyContent: 'center',
        flex: 1
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    button: {
        backgroundColor: "#ED145B",
        color: 'white',
        fontSize: 18,
        padding: 10,
        borderRadius: 10,
    },
    buttonContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 50,
    },
});