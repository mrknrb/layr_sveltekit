import { PermissonEnums } from '../Enums/PermissonEnums';

export interface CollectionData {
	name: string;
	publicPermission: PermissonEnums;
	owner: string;
}
