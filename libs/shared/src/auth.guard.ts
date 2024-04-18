import { Injectable } from '@nestjs/common';


@Injectable()
export class SharedService {

    hasJwt() {
        return { jwt: 'token'};
    }

}
