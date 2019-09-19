import { getConnectionOptions, createConnection } from 'typeorm';
import { Image } from '../entity/Image';
import { Vendor } from '../entity/Vendor';

export const createTypeormConn = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);

  return process.env.NODE_ENV === 'production'
    ? createConnection({
        ...connectionOptions,
        url: process.env.DATABASE_URL,
        entities: [Image, Vendor],
        name: 'default',
      } as any)
    : createConnection({ ...connectionOptions, name: 'default' });
};
