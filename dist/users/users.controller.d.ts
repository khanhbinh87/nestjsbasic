/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & Omit<import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findAll(): string;
    findOne(id: string): "Not found user" | import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & Omit<import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & Omit<import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, import("./schemas/user.schema").User>;
    update(updateUserDto: UpdateUserDto): Promise<import("mongoose").UpdateWriteOpResult>;
    remove(id: string): "Not found user" | import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & Omit<import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, import("./schemas/user.schema").User>;
}
