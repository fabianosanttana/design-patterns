// implement use case interface
import { UseCase } from "../interface/use-case.interface";

export abstract class BaseUseCase<Input, Output>
  implements UseCase<Input, Output>
{
  abstract execute(input: Input): Promise<Output>;
}
