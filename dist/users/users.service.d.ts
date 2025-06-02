import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import mongoose, { Model } from 'mongoose';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    getHasPassword: (password: string) => string;
    create(createUserDto: CreateUserDto): Promise<mongoose.Document<unknown, {}, User> & Omit<User & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    findAll(): string;
    findOne(id: string): "Not found user" | mongoose.Query<mongoose.Document<unknown, {}, User> & Omit<User & {
        _id: mongoose.Types.ObjectId;
    }, never>, mongoose.Document<unknown, {}, User> & Omit<User & {
        _id: mongoose.Types.ObjectId;
    }, never>, {}, User>;
    update(updateUserDto: UpdateUserDto): Promise<mongoose.UpdateWriteOpResult>;
    remove(id: string): "Not found user" | mongoose.Query<mongoose.mongo.DeleteResult, mongoose.Document<unknown, {}, User> & Omit<User & {
        _id: mongoose.Types.ObjectId;
    }, never>, {}, User>;
}
