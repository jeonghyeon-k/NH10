
export default function Icon(props){
    const srcsrc = "./assets/images"
    let data ={};
    let Width,Height = "24px";
    let rc;

    switch(props.size){
        case "xsc" :
            data.Width = "24px";
            data.Height = "24px";
              break
        case "sc" :
            data.Width = "27px";
            data.Height = "27px";
            break;
        case "md" :
            data.Width = "36px";
            data.Height = "36px";
            break;
        case "lmd" :
            data.Width = "40px";
            data.Height = "40px";
            break;
        case "lg" :
            data.Width = "58px";
            data.Height = "58px";
            break;
      }
      switch(props.type){
          case "logo" :
            data.Src = `${srcsrc}/logo.png`
      }


      return data;
}