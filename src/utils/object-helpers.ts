import {UserType} from "../redux/users-reducer";

export const updateObjectInArray = (items: UserType[], itemId: number, /*newObjProps*/ followed: boolean) => {
   return items.map(u => u.id === itemId ? {...u, followed} : u)
}