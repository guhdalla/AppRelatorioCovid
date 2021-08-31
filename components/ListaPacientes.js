import React, { useState } from 'react';
import { useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DADOS = require("../dados/dados_covid.json");

export default function ListaPacientes({ navigation }) {
    const [positivo, setPositivo] = useState(0);
    const [negativo, setNegativo] = useState(0);
    const [suspeito, setSuspeito] = useState(0);
    const calcularPositivo = () => {
        var valor = 0;
        DADOS.forEach(item => {
            if (item.statuscovid == 'positivo') {
                valor++;
            }
        });
        setPositivo(valor);
        return positivo;
    }
    const calcularNegativo = () => {
        var valor = 0;
        DADOS.forEach(item => {
            if (item.statuscovid == 'negativo') {
                valor++;
            }
        });
        setNegativo(valor);
        return negativo;
    }
    const calcularSuspeito = () => {
        var valor = 0;
        DADOS.forEach(item => {
            if (item.statuscovid == 'suspeito') {
                valor++;
            }
        });
        setSuspeito(valor);
        return suspeito;
    }

    useEffect(() => {
        calcularSuspeito();
        calcularNegativo();
        calcularPositivo();
      }, []);
    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList style={styles.list}
                    data={DADOS}
                    keyExtractor={item => item.nome.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.itemConteiner}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Detalhes", { item })}
                            >
                                <View style={styles.bolaContainer}>
                                    <Text style={styles.name}>{item.nome}</Text>
                                    <View style={item.statuscovid == 'positivo' ? styles.bolaRed : item.statuscovid == 'negativo' ? styles.bolaGreen : styles.bolaYellow}></View>
                                </View>
                                <Text>{`Sexo: ${item.sexo}`}</Text>
                                <Text>{`Data de nascimento: ${item.data_nasc}`}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoPositivo}>Positivo: {positivo}</Text>
                <Text style={styles.infoSuspeito}>Suspeito: {suspeito}</Text>
                <Text style={styles.infoNegativo}>Negativo: {negativo}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    infoSuspeito: {
        textAlign: 'center',
        flex: 0.33,
        backgroundColor: 'orange',
        padding: 20,
    },
    infoNegativo: {
        textAlign: 'center',
        flex: 0.335,
        backgroundColor: 'green',
        padding: 20,
    },
    infoPositivo: {
        textAlign: 'center',
        flex: 0.335,
        backgroundColor: 'red',
        padding: 20,
    },
    infoContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 0.05
    },
    listContainer: {
        flex: 0.95
    },
    container: {
        flex: 1
    },
    itemConteiner: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        shadowColor: "black",
        padding: 10
    },
    list: {
        marginTop: 10,
        marginBottom: 20,
        padding: 10
    },
    name: {
        flex: 1,
        height: 30,
        fontSize: 18,
        fontWeight: 'bold',
    },
    bolaRed: {
        borderRadius: 100,
        backgroundColor: "red",
        height: 10,
        width: 10,
    },
    bolaGreen: {
        borderRadius: 100,
        backgroundColor: "green",
        height: 10,
        width: 10,
    },
    bolaYellow: {
        borderRadius: 100,
        backgroundColor: "orange",
        height: 10,
        width: 10,
    },
    bolaContainer: {
        flexDirection: 'row'
    },
});