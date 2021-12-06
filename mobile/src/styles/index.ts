import { StyleSheet, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const colors = {
    white: "#fff",
    lightestGray: "#fefefe",
    lightGray: "#f2f2f2",
    borderGray: "#e1e1e1",
    lighterGray: "#cdcdcd",
    lighterMediumGray: "#9e9e9e",
    lightMediumGray: "#6c6c6c",
    mediumGray: "#525252",
    darkGray: "#263238",
    black: "#000",
    primary: "#FFC700",
    secondary: "rgba(38, 50, 56, 0.5)",
    bluePill: "#407bff61",
    red: "#df5753",
};

const text = StyleSheet.create({
    bold: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 50,
        color: colors.white,
        lineHeight: 35,
        letterSpacing: -0.015,
    },

    regular: {
        width: 240,
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
        marginBottom: 50,
        color: colors.white,
        lineHeight: 22,
        letterSpacing: -0.015,
    },

    username: {
        marginLeft: 15,
        fontSize: 16,
        fontWeight: "bold",
        color: colors.white,
        lineHeight: 22,
        letterSpacing: -0.015,
    },

    primaryText: {
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 22,
        textAlign: "center",
        color: colors.black,
        textTransform: "uppercase",
        letterSpacing: -0.015,
        marginLeft: 75,
    },

    movieTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.white,
    },

    movieTitleDetails: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.white,
        paddingLeft: 25,
        paddingRight: 15,
        paddingVertical: 15,
    },

    movieYear: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.primary,
    },

    movieYearDetails: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.primary,
    },

    movieSubtitle: {
        fontSize: 16,
        marginTop: 5,
        color: colors.lighterGray,
    },

    movieSubtitleDetails: {
        fontSize: 18,
        color: colors.lighterMediumGray,
    },

    movieSynopsisText: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.white,
        paddingTop: 15,
    },

    movieSynopsis: {
        marginBottom: 30,
        fontSize: 16,
        fontWeight: "400",
        color: colors.lighterMediumGray,
    },

    reviewText: {
        fontSize: 16,
        fontWeight: "400",
        color: colors.lighterMediumGray,
    },

    loginTitle: {
        fontSize: 30,
        color: colors.white,
        textTransform: "uppercase",
        marginBottom: 70,
    },

    logoutText: {
        color: colors.black,
        textTransform: "uppercase",
    },

    detailsBtnTxt: {
        textTransform: "uppercase",
        fontSize: 14,
        fontWeight: "bold",
        color: colors.white,
    },

    movieAvalicoesText: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.white,
        paddingBottom: 15,
    },
});

const theme = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: colors.mediumGray,
    },

    reviewButtonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingBottom: 20,
    },

    card: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.white,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "space-around",
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    draw: {
        width: 313,
        height: 225,
        marginBottom: 40,
    },

    textContainer: {
        paddingHorizontal: 20,
    },

    primaryButton: {
        backgroundColor: colors.primary,
        width: 335,
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
    },

    arrowContainer: {
        height: 50,
        width: 50,
        backgroundColor: colors.secondary,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    scrollContainer: {
        padding: 10,
    },

    movieCard: {
        height: 450,
        width: 360,
        backgroundColor: colors.lightMediumGray,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginVertical: 20,
        alignItems: "center",
        justifyContent: "space-around",
    },

    movieImg: {
        width: "100%",
        height: 225,
        margin: 16,
        marginTop: 20,
    },

    movieImgDetails: {
        width: "100%",
        height: 225,
    },

    movieDescription: {
        width: "100%",
        paddingLeft: 25,
        paddingTop: 15,
        paddingRight: 20,
    },

    inputContainer: {
        width: "100%",
        height: 80,
        backgroundColor: colors.lightMediumGray,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginVertical: 12.5,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    selectContainer: {
        width: "90%",
        height: "90%",
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    searchInput: {
        width: "90%",
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: colors.borderGray,
    },

    detailCard: {
        width: 365,
        height: 755,
        marginBottom: 20,
        backgroundColor: colors.lightMediumGray,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    reviewCard: {
        width: 365,
        backgroundColor: colors.lightMediumGray,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginBottom: 20,
    },

    scrollTextContainer: {
        height: 275,
        marginVertical: 20,
        padding: 20,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: colors.borderGray,
    },

    scrollReviewContainer: {
        marginVertical: 20,
        padding: 20,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: colors.borderGray,
    },

    loginCard: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.white,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    form: {
        marginVertical: 10,
    },

    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 25,
    },

    textInput: {
        width: 335,
        height: 50,
        borderWidth: 1,
        borderColor: colors.borderGray,
        borderRadius: 10,
        padding: 10,
        backgroundColor: colors.lightestGray
    },

    toggle: {
        margin: -40,

    },

    buttonTextContainer: {

    },

    detailsBtn: {
        width: "90%",
        height: 40,
        borderWidth: 1,
        borderColor: colors.white,
        marginTop: 10,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },

    textArea: {
        width: "100%",
        maxWidth: "100%",
        borderWidth: 1,
        height: 200,
        borderColor: colors.mediumGray,
        borderRadius: 10,
        padding: 10,
        marginVertical: 15,
    },

    textAreaReview: {
        marginVertical: 15,
        marginHorizontal: 20,
        height: 100,
        textAlignVertical: "top",
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: colors.borderGray,
        backgroundColor: colors.white,
        color: colors.lighterMediumGray,
    },

    reviewContainer: {
        marginHorizontal: 20,
    },

    reviewStarName: {
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
    },

    reviewStar: {
    },

    backButtonHeaderTextContainer:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
});

const nav = StyleSheet.create({
    leftText: {
        color: colors.black,
        fontWeight: "bold",
        marginLeft: 50,
    },

    leftTextOnBackButton: {
        color: colors.black,
        fontWeight: "bold",
        marginLeft: 10,
    },

    logoutBtn: {
        width: 75,
        height: 25,
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20,
    },
})

const tabbar = StyleSheet.create({
    container: {
        width: deviceWidth,
        height: 80,
        backgroundColor: colors.white,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
})

const admin = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: "center",
    },
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        height: 80,
        marginTop: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 10,
        color: colors.white,
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        height: 80,
        width: "90%",
        marginHorizontal: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 10,
        color: colors.black,
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});


export { colors, theme, text, nav, tabbar, admin, pickerSelectStyles };