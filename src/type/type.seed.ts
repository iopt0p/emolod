import { TypeEnum } from './type.enum';
import { Type } from './entities/type.entity';
import { DataSource } from 'typeorm';

export const seedTypes = async (dataSource: DataSource) => {
  const repo = dataSource.getRepository(Type);
  const existing = await repo.find();

  if (existing.length === 0) {
    await repo.save([{ name: TypeEnum.INCOME }, { name: TypeEnum.EXPENSE }]);
    console.log('Types seeded');
  }
};
