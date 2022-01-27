import AxiosService from "./axiosservice";

const service = new AxiosService();

let baseurl='http://fundoonotes.incubation.bridgelabz.com/api/';

let headers={
    headers:{
      Authorization:localStorage.getItem("token")
    }
  }

class UserService{

    registration(data){
        return service.postMethod(`${baseurl}user/userSignUp`,data);
    }
    signin(data){
        return service.postMethod(`${baseurl}user/login`,data);
    }

    forgot(data){
        return service.postMethod(`${baseurl}user/reset`,data);
    }

    reset(data) {
        return service.postMethod(`${baseurl}user/reset-password`,data,headers)
      }

    

    // archiveChange(data){
    //   return service.postMethod(`${baseurl}notes/archiveNotes`,data,headers)
    // }
  
}

export default UserService
