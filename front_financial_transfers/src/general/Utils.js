import { CONST_MILIS_TO_SECONDS, SESSION_TIME } from 'variables/constants.js';


class Utils {

    checkSessionTimeAndGo(props, path) {
        if(props.user !== undefined){
            let timeLeft = (Date.now() - props.sessionTime) / CONST_MILIS_TO_SECONDS;

            if(timeLeft > SESSION_TIME){
                props.refreshUserSession(undefined, undefined)
            }
            else{
                props.history.push(path);
            }
        }
    }

    checkSessionTimeAndGoBack(props, path) {
        if(props.user !== undefined){
            let timeLeft = (Date.now() - props.sessionTime) / CONST_MILIS_TO_SECONDS;

            if(timeLeft > SESSION_TIME){
                props.refreshUserSession(undefined, undefined);
                props.history.push(path);
            }
        }
        else{
            props.history.push(path);
        }
    }

    hasRole(user, role){
        if(user !== undefined){
            for(let i=0; i<user.roles.length; i++){
                if(user.roles[i].name === role)
                    return true;
            }
        }
        return false;
    }

    hasRoles(user, roles){
        if(user !== undefined){
            for(let i=0; i<user.roles.length; i++){
                for(let j=0; j<roles.length; j++){
                    if(user.roles[i].name === roles[j])
                    return true;
                }
            }
        }
        return false;
    }

    putClaimsOnUser(user, claims){
        for(let i=0; i<claims.length; i++){
            if(claims[i].claimUri.includes("username"))
                user.userName = claims[i].value
            else if(claims[i].claimUri.includes("extendedExternalId"))
                user.cpf = claims[i].value
            else if(claims[i].claimUri.includes("userid"))
                user.id = claims[i].value
            else if(claims[i].claimUri.includes("extendedRef"))
                user.cns = claims[i].value
            else if(claims[i].claimUri.includes("externalid"))
                user.cnes = claims[i].value
            else if(claims[i].claimUri === "http://wso2.org/claims/addresses")
                user.addresses = claims[i].value
            else if(claims[i].claimUri.includes("addresses.locality"))
                user.addressesLocality = claims[i].value
            else if(claims[i].claimUri.includes("mobile"))
                user.phoneCell = claims[i].value
            else if(claims[i].claimUri.includes("givenname"))
                user.firstName = claims[i].value
            else if(claims[i].claimUri.includes("addresses.formatted"))
                user.addressesFormatted = claims[i].value
            else if(claims[i].claimUri.includes("local"))
                user.uf = claims[i].value
            else if(claims[i].claimUri.includes("country"))
                user.country = claims[i].value
            else if(claims[i].claimUri.includes("emailaddress"))
                user.email = claims[i].value
            else if(claims[i].claimUri.includes("postalcode"))
                user.cep = claims[i].value
            else if(claims[i].claimUri.includes("lastname"))
                user.lastName = claims[i].value
            else if(claims[i].claimUri.includes("phoneNumbers.home"))
                user.phoneHome = claims[i].value
            else if(claims[i].claimUri.includes("active"))
                user.status = claims[i].value
        }
        return user;
    }

    filterUserList(userList, term){
        let auxList= [];

        for(let i=0; i<userList.length; i++){
            if(userList[i].id.toLowerCase().includes(term.toLowerCase()) || 
               userList[i].firstName.toLowerCase().includes(term.toLowerCase()) || 
               userList[i].lastName.toLowerCase().includes(term.toLowerCase()) || 
               userList[i].status.toLowerCase().includes(term.toLowerCase()) || 
               userList[i].userName.toLowerCase().includes(term.toLowerCase())){
                  auxList.push(userList[i]);
            }
        }

        return auxList;
    }

    filterRoleList(roleList, term){
        let auxList= [];

        for(let i=0; i<roleList.length; i++){
            if(roleList[i].name.toLowerCase().includes(term.toLowerCase())){
                  auxList.push(roleList[i]);
            }
        }

        return auxList;
    }

    brazilDateToEUADate(date){
        let splitDate = date.split(" ");
        let dateD = splitDate[0];
        let timeD = splitDate[1];

        dateD = dateD.split('/').reverse().join('-');
        dateD = dateD +" "+ timeD;

        return new Date(dateD);
    }

    searchList(list, searchFieldsMap){
        let auxList= [];
        
        for(let i=0; i<list.length; i++){
            let mapKeys = searchFieldsMap.keys();
            let count1 = 0;
            let count2 = 0;
            for(let j=0; j<searchFieldsMap.size; j++){
                let mapKey = mapKeys.next().value;
                if(searchFieldsMap.get(mapKey) !== ''){
                    if(mapKey.includes("_")){
                        if(mapKey.includes("_inicio")){
                            count1++;
                            let start = searchFieldsMap.get(mapKey).toLowerCase();
                            let end = searchFieldsMap.get(mapKey.split("_inicio")[0]+"_fim").toLowerCase();
                            let current = new Date(list[i][`${mapKey.split("_inicio")[0]}`]).toLocaleDateString() + ' ' + new Date(list[i][`${mapKey.split("_inicio")[0]}`]).toLocaleTimeString('pt-BR', {timeZone: 'UTC'});

                            let startD = this.brazilDateToEUADate(start);
                            let currentD = this.brazilDateToEUADate(current);
                            if(end !== ''){
                                let endD = this.brazilDateToEUADate(end);
                                if(startD <= currentD && currentD <= endD){
                                    count2++;
                                }
                            }
                            else{
                                if(startD <= currentD){
                                    count2++;
                                }
                            }
                        }
                        else{
                            if(mapKey.includes("_fim")){
                                if(searchFieldsMap.get(mapKey.split("_fim")[0]+"_inicio").toLowerCase() === ''){
                                    let end = searchFieldsMap.get(mapKey).toLowerCase();
                                    let current = list[i][`${mapKey.split("_fim")[0]}`];

                                    let endD = this.brazilDateToEUADate(end);
                                    let currentD = this.brazilDateToEUADate(current);

                                    if(currentD <= endD){
                                        count2++;
                                    }
                                }
                            }
                        }
                    }
                    else{
                        count1++;
                        if(list[i][`${mapKey}`].toString().toLowerCase() === searchFieldsMap.get(mapKey).toLowerCase()){
                            count2++;
                        }
                    }
                }
            }
            if(count1 === count2){
                auxList.push(list[i]);
            }
        }

        return auxList;
    }

}

export default new Utils()