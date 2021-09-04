export const BoxCardsStyles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.primary.main,
  },
  topRow: {
    height: "12vh",
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(1),
  },
  icon: {
    height: "10vh",
    width: "10vh",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.background.card,
  },
  bottomRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  green: {
    color: theme.palette.text.green,
    fontSize: "1.5rem",
  },
  red: {
    color: theme.palette.text.red,
    fontSize: "1.5rem",
  },
  blue: {
    color:"#0091D5",
    fontSize: "1.5rem",
  },
  dark: {
    color:"#202020",
    fontSize: "1.5rem",
  },
  value:{
    color:"#fefefe",
  },
  box1:{
    background:"#1AC9E6"
  },
  box2:{
    background:"#EB548C"
  },
  box3:{
    background:"#DBAE58"
  },
  box4:{
    background:"#B3C100"
  },
});
