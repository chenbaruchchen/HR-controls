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
        default:
            break;
    }
    return meta
}