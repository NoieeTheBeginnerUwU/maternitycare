import { faRotateBack, faRotateForward, faRuler, faWeightScale } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Modal} from 'react-native';
//import moment
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import moment from "moment";
import AntDesign from '@expo/vector-icons/AntDesign';

const Eddcalc = () => {

  const [date, setDate] = useState("");
  const [cycleDays, setCycleDays] = useState(0);
  const [weight, setWeight] = useState("");

  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() -50000),
    "YYYY/MM/DD"
  );
  const dateNow = getFormatedDate(
    today.setDate(today.getDate()),
    "YYYY/MM/DD hh:mm a"
  );
  //console.log(startDate)
  //Date
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [edd, setEdd] = useState("");
  const [con, setCon] = useState("");
  const [startedDate, setStartedDate] = useState("");
    function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
    }


    let fDate = moment(selectedStartDate,"YYYY/MM/DD");
    let EDD = moment(fDate).add(280,'d').format("YYYY/MM/DD");
    let CON = moment(fDate).add(14,'d').format("YYYY/MM/DD");

  console.log("edd: " + EDD)
  console.log("con: " + CON)
  
  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  return (
    <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
      <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center',backgroundColor:'navy',}}>
        <Text style={{fontSize:30,color:'white',fontWeight:700,textAlign:'center'}}>Estimated Due Date Calculator</Text>
        <Text style={{fontSize:12,color:'white',marginTop:30,marginBottom:10}}>enter last menstrual cycle date</Text>
                    <TouchableOpacity
                      style={{width:200,height:30,backgroundColor:'white'}}
                      onPress={handleOnPressStartDate}
                    >
                      <Text>{selectedStartDate}</Text>
                    </TouchableOpacity>
                    <Text style={{color:'white',fontSize:20,marginTop:40}}>Date of congestion is <Text style={{fontWeight:700,color:'yellow'}}>{CON!=="Invalid date"?CON:0}</Text></Text>
                    <Text style={{color:'white',fontSize:20}}>Estimated Due Date is <Text style={{fontWeight:700,color:'orange'}}>{EDD!=="Invalid date"?EDD:0}</Text></Text>
                  </View>
                  {/* Create modal for date picker */}
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={openStartDatePicker}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <DatePicker
                        mode="calendar"
                        minimumDate={startDate}
                        selected={startedDate}
                        onDateChanged={handleChangeStartDate}
                        onSelectedChange={(date) => [setSelectedStartDate(date),handleOnPressStartDate()]}
                        options={{
                          backgroundColor: "#080516",
                          textHeaderColor: "#469ab6",
                          textDefaultColor: "#FFFFFF",
                          selectedTextColor: "#FFF",
                          mainColor: "#469ab6",
                          textSecondaryColor: "#FFFFFF",
                          borderColor: "rgba(122, 146, 165, 0.1)",
                        }}
                      />
                    </View>
                    
                  </View>
                </Modal>
       
    </View>
  )
}

export default Eddcalc

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 36,
    marginVertical: 60,
    color: "#111",
  },
  textSubHeader: {
    fontSize: 25,
    color: "#111",
  },
  inputBtn: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#222",
    height: 50,
    paddingLeft: 8,
    fontSize: 18,
    justifyContent: "center",
    marginTop: 14,
  },
  submitBtn: {
    backgroundColor: "navy",
    paddingVertical: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 12,
    marginVertical: 16,
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#080516",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 35,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  boxes: {

  }
});

