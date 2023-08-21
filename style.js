import { StyleSheet } from "react-native";

export const lotties = {
//These are used for the get started page as animations
    lottie1:require("./assets/animation_lki5y2ht.json"),
    lottie2:require("./assets/CH1BY61YEL.json"),
    lottie3:require("./assets/animation_lkhwr8ib.json"),
    lottie4:require("./assets/animation_lkhxsu76.json"),
    lottie5:require("./assets/animation_lkhxwej6.json"),
    lottie6:require("./assets/animation_lkhxxrzj.json"),
    lottie7:require("./assets/animation_lkhy11p3.json"),
    lottie8:require("./assets/animation_lkhy2gg5.json"),
    lottie9:require("./assets/animation_lkhza54x.json"),
    lottie10:require("./assets/animation_lkhzxcw1.json"),
    lottie11:require("./assets/animation_lkhzyhw3.json"),
    lottie12:require("./assets/animation_lki6wxko.json"),
    lottie13:require("./assets/animation_lkods1hu.json"),
    lottie14:require("./assets/animation_llc0esf6.json"),
    lottie15:require("./assets/animation_lliyifik.json"),
    
//Antivirus

    Antivirus:require("./assets/animation_lkpwvk2b.json"),
    AntivirusChild:require("./assets/animation_lkpxtoud.json"),
    Antivirus3:require("./assets/animation_lkpy4dxw.json"),

//Mother Animations
    MotherBabyCrib:require('./assets/animation_lkk2lm1g.json'),
    MotherBabyOutside:require('./assets/animation_lkk2nmsb.json'),
    MotherBabyChair:require('./assets/animation_lkk2vbzy.json'),
    MotherBabyDoctor:require('./assets/animation_lkpwsos3.json'),

//Baby Animations
    babySleeping:require("./assets/animation_lkk2e13f.json"),
    babyWithPacifier:require("./assets/animation_lkk2gb2d.json"),
    babyLogo:require('./assets/animation_lkk2hvpx.json'),

//Sun Animations
    sun1:require("./assets/animation_lkjz7ftp.json"),
    sun2:require("./assets/animation_lkjz88bc.json"),
//Moon Animations
    moon1:require("./assets/animation_lkjzfgsp.json"),
    moon2:require("./assets/animation_lkjzki8g.json"),
    moon3:require("./assets/animation_lkjzlmjk.json"),
                                                           
//Animations for login, sign up
    //checks
    checkAnimation1:require("./assets/successfully-done.json"),
    checkAnimation2:require("./assets/success.json"),
    checkAnimation3:require("./assets/success2.json"),
    //crosses
    crossAnimation1:require("./assets/failed.json"),
    crossAnimation2:require("./assets/failed2.json"),

//Doctor Animations

//No Data Found

    NoData1:require("./assets/animation_lkqgtsv8.json"),
    NoDataSearch:require("./assets/animation_lkqgvh7d.json"),

//Has Internet



//No Internet

    NoInternet1:require("./assets/animation_lkqgziln.json"),
    

//Loading Animation

    LoadingCircles:require("./assets/animation_lkqhsz36.json"),
    LoadingCircle:require("./assets/animation_lkqhyf9z.json"),
    LoadingCircleThrough:require("./assets/animation_lkqi0bmq.json"),
    LoadingCircleThrough3:require("./assets/animation_lkqi29t9.json"),
    Loading100:require("./assets/animation_lkqi606i.json"),
    LoadingGears:require("./assets/animation_lkqhwxgr.json"),

//Calendar Animation

    Calendar1:require("./assets/animation_lkr1j23j.json"),
    Calendar2:require("./assets/animation_lkr1lasy.json"),
    CalendarSuccess:require("./assets/animation_lkr1mqit.json"),

}

export const images = {
    imageTemp:require("./assets/usertemplate.png"),
}

export const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    lottie: {
        width: 350,
        height: 350,
        alignSelf: 'center',
    },
    inputs: {
        width: '90%',
        fontSize: 20,
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 2,
        padding: 10,
        marginTop: '2.5%',
        flexDirection:'row'
    },
    buttonBack: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,249,.6)',
        color: 'white',
        justifyContent: 'center',
        borderRadius: 10
    },
    buttonBackText: {
        color: 'white',
        alignSelf: 'center'
    },
    btnContainer: {
        width: '25%',
        height: 45,
        margin: 10,
    },
    loginBtn: {
        width: '100%',
        height: 45,
        backgroundColor: 'rgba(0,0,249,.6)',
        alignSelf: 'center',
        marginTop: '5%',
        borderRadius: 14,
    },
    loginBtnText: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center'
    },
    redirectContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        marginTop: '3%'
    },
    redirect: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginLeft: '2%',
    },
    //Dashboard navigation
    insidePages: {
        width: '100%',
        height: '100%',
    }

})