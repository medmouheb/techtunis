import {CarouselPhoto} from '../../testdata'
const initState ={
    CarouselPhoto:[...CarouselPhoto],
}
const CarouselPhotoReducer = (state = initState, action) => {
     return {
       ...state,  
     }
    }
  export default CarouselPhotoReducer