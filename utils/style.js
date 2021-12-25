import { makeStyles } from '@mui/styles';
import { color, fontSize, height, padding, textAlign } from '@mui/system';


const useStyles = makeStyles({
    appbar:{
        backgroundColor:'#3187ED'
    },
    navWidget:{
        backgroundColor:'#3187ED',
        minHeight:'40px',
    },
    navCurrency : {
        color:'#fff',
        '&::before': {
            border:0
        },
        "& svg": {
            color:'#fff',
        },
        "& option": {
            backgroundColor:'#3187ED!important',
            padding:'5px!important'
        }
    },
    navbar: {
        backgroundColor:'#fff',
    },
    navIcon: {
        marginRight:50,
        '& div': {
            margin:'0 15px !important',
        }
    },
    navBtn : {
        backgroundColor:'#00C6D7 !important',
        textTransform: 'none',
        padding:'12px 15px'
    },
    navSelect : {
        '&::before': {
            border:0
        }
    },
    navCategories : {
        '& a': {
            color: '#4D4D4D',
            margin:'0 15px'
        }
    },
    slickSlider : {
        marginTop:"15rem",
        overflow:"hidden",
        height:"500px",
        '& .slick-slide': {
            padding:'0 20px 0 20px'
        }
    },
    bestDealsHeadings:{
        marginTop:"30px",
        marginBottom:"30px",
        "& p": {
            textAlign:"right",
            color:"#3187ED",
            cursor:"pointer"
        },
        "& h5":{
            fontWeight:"600",
            fontSize:"22px"
        }
    },
    productName:{
        fontSize:"12px",
        fontFamily:"poppins",
        fontWeight:"500",
        marginBottom:"20px",
    },
    classifiedName:{
        fontSize:"11px",
        fontFamily:"poppins",
        fontWeight:"500",
    },
    productPrice:{
        fontSize:"14px",
        color:"#3187ED",
        fontWeight:"600",
        marginBottom:"5px"
    },
    ClassifiedHeading:{
        fontSize:"20px",
        fontWeight:"600",
        textAlign:"center"
    },
    classifiedPrice:{
        fontSize:"14px",
        color:"#00C6D7",
        fontWeight:"600",
        marginLeft:"10px",
    },
    classifiedLoc:{
        fontSize:"10px",
        color:"#8D8D8D",
        marginRight:"10px",
        display:"flex",
        alignItems:"center"
    },
    reviewCount:{
        fontSize:"12px",
        color:"#8D8D8D",
        paddingLeft:"2px",
    },
    ratingStar:{
        '& svg': {
            color:"#3187ED"
        }
    },
    classifiedBtn:{
        textTransform:'none',
        backgroundColor:'#00C6D7',
        fontSize:'12px',
        paddingLeft:'30px',
        marginTop:'20px'
    },
    classifiedPrdDiv:{
        backgroundColor:"#E5E5E5",
        marginTop:"50px",
        padding:"40px 0 40px 0"
    },
    classifiedCard: {
        borderRadius:"25px",
        "& img":{
            borderRadius:"25px"
        },
        marginBottom:"20px",
        marginTop:"10px"
    },
    recOldPrice:{
        fontSize:"10px",
        color:"#8D8D8D",
        fontWeight:"600",
        marginLeft:"10px",
        textDecoration:"line-through"
    },
    recStar:{
        fontSize:"10px",
        color:"#8D8D8D",
        marginRight:"10px",
        display:"flex",
        alignItems:"center"
    },
    recPrdContainer:{
        marginBottom:"20px"
    },
    flashSale:{
        marginTop:"100px",
    },
    flashSaleDiv:{
        backgroundImage:'url(img/sale.png)',
        backgroundColor:"#3187ED",
        borderRadius:"30px",
        backgroundSize:"cover",
        backgroundBlendMode:"luminosity",
        '& p':{
            fontSize:"12px",
            marginBottom:"10px"
        },
        '& h4': {
            color:"white",
            fontWeight:"600",
            marginBottom:"10px"
        }
    },
    stockProgress:{
        marginLeft:"10px",
        marginRight:"10px"
    },
    fsPrdDiv:{
        backgroundColor:"white",
        padding:"10px",
        borderRadius:"10px"
    },
    fsviewmore:{
        '& p':{
            textAlign:"right",
            marginRight:"50px",
            color:"white",
            fontSize:"14px",
        },
        paddingTop:"0px !important"
    },
    hotsale:{
        fontSize:"22px",
        marginTop:"40px",
        fontWeight:"600"
    },
    hotsalePrd:{
        marginTop:"20px"
    },
    hsAddtocart:{
        display:"block",
        margin:"auto",
        color:"#3187ED",
        marginBottom:"10px"
    },
    hsCardMedia:{
        padding:"10px"
    },
    backToTop:{
        backgroundColor:"#F8F8F8",
        textAlign:"center",
        padding:"15px",
        paddingBottom:"50px",
        "& p":{
            fontSize:"20px",
            color:"#8D8D8D"
        },
        "& button":{
            color:"#8D8D8D"
        },
        "& svg":{
            fontSize:"30px"
        },
        cursor:'pointer'
    },
    newsLetter:{
        backgroundColor:"#3187ED",
        paddingBottom:"30px"
    },
    nlHeading:{
        "& h5":{
            color:"white",
            fontWeight:"600"
        },
        "& p":{
            fontSize:"12px",
            marginTop:"10px"
        }
    },
    nlBtn:{
        backgroundColor:"#4D4D4D",
        margin:"5px"
    },
    colorBnrContainer:{
        position: 'relative',
        color: 'white',
    },
    colorBnrH4:{
        position:"absolute",
        top:"60px",
        left:"80px",
        fontWeight:"300"
    },
    colorBnrH6:{
        position:"absolute",
        bottom:"40px",
        left:"80px",
        fontWeight:"300",
        fontSize:"22px",
    },
    colorBnrArrow:{
        position:"absolute",
        bottom:"40px",
        right:"80px",
        '& svg':{
            border: '1px solid white',
            borderRadius: '50%',
            fontSize: '30px',
        }
    }
})

export default useStyles;