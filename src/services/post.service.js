import { UserService } from './user.service';
import environment from '../environments/index';

export class PostService {

    static  feed() {
        fetch(environment.apiUrl + '/post?sort=-1', {
            headers: {
                Authorization: UserService.getToken()
            }
        }).then(res => res.json());
    }

    static async get(id) {

            const res = await fetch(environment.apiUrl + './post', + id, {
                headers: {
                    Authorization: UserService.getToken()
                }
            });
            return res.json();
    }
}