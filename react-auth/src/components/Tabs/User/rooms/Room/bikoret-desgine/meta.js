export default function meta(val) {
    let meta=null

    switch (val.name) {
        case 'sadir':
            meta={
                name:'sadir',type:'strings'
            }
            break;

            case 'מילואים':
            meta={
                name:'מילואים',type:'string'
            }
            break;
    
            case 'sadir-rate':
                meta={
                    name:'sadir-rate',type:'string'
                }
                break;
                case 'mil-rate':
                    meta={
                        name:'mil-rate',type:'string'
                    }
                    break;
                    case 'שאלון מפקד':
                    meta={
                        name:'שאלון מפקד',type:'string'
                    }
                    break;
        default:
            break;
 if (meta===null){meta={
    name:'לא נמצא השם',type:'string'
 } }
    }
    return meta
}