
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Processo
 * 
 */
export type Processo = $Result.DefaultSelection<Prisma.$ProcessoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Processos
 * const processos = await prisma.processo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Processos
   * const processos = await prisma.processo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.processo`: Exposes CRUD operations for the **Processo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Processos
    * const processos = await prisma.processo.findMany()
    * ```
    */
  get processo(): Prisma.ProcessoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Processo: 'Processo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "processo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Processo: {
        payload: Prisma.$ProcessoPayload<ExtArgs>
        fields: Prisma.ProcessoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcessoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcessoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>
          }
          findFirst: {
            args: Prisma.ProcessoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcessoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>
          }
          findMany: {
            args: Prisma.ProcessoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>[]
          }
          create: {
            args: Prisma.ProcessoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>
          }
          createMany: {
            args: Prisma.ProcessoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProcessoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>[]
          }
          delete: {
            args: Prisma.ProcessoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>
          }
          update: {
            args: Prisma.ProcessoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>
          }
          deleteMany: {
            args: Prisma.ProcessoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcessoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProcessoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>[]
          }
          upsert: {
            args: Prisma.ProcessoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessoPayload>
          }
          aggregate: {
            args: Prisma.ProcessoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcesso>
          }
          groupBy: {
            args: Prisma.ProcessoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcessoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcessoCountArgs<ExtArgs>
            result: $Utils.Optional<ProcessoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    processo?: ProcessoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Processo
   */

  export type AggregateProcesso = {
    _count: ProcessoCountAggregateOutputType | null
    _avg: ProcessoAvgAggregateOutputType | null
    _sum: ProcessoSumAggregateOutputType | null
    _min: ProcessoMinAggregateOutputType | null
    _max: ProcessoMaxAggregateOutputType | null
  }

  export type ProcessoAvgAggregateOutputType = {
    id: number | null
  }

  export type ProcessoSumAggregateOutputType = {
    id: number | null
  }

  export type ProcessoMinAggregateOutputType = {
    id: number | null
    hash_id: string | null
    data_disponibilizacao: Date | null
    numero_processo: string | null
    autores: string | null
    advogados: string | null
    reu: string | null
    conteudo_publicacao: string | null
    valor_principal_bruto_liquido: string | null
    juros_moratorios: string | null
    honorarios_adv: string | null
    status: string | null
  }

  export type ProcessoMaxAggregateOutputType = {
    id: number | null
    hash_id: string | null
    data_disponibilizacao: Date | null
    numero_processo: string | null
    autores: string | null
    advogados: string | null
    reu: string | null
    conteudo_publicacao: string | null
    valor_principal_bruto_liquido: string | null
    juros_moratorios: string | null
    honorarios_adv: string | null
    status: string | null
  }

  export type ProcessoCountAggregateOutputType = {
    id: number
    hash_id: number
    data_disponibilizacao: number
    numero_processo: number
    autores: number
    advogados: number
    reu: number
    conteudo_publicacao: number
    valor_principal_bruto_liquido: number
    juros_moratorios: number
    honorarios_adv: number
    status: number
    _all: number
  }


  export type ProcessoAvgAggregateInputType = {
    id?: true
  }

  export type ProcessoSumAggregateInputType = {
    id?: true
  }

  export type ProcessoMinAggregateInputType = {
    id?: true
    hash_id?: true
    data_disponibilizacao?: true
    numero_processo?: true
    autores?: true
    advogados?: true
    reu?: true
    conteudo_publicacao?: true
    valor_principal_bruto_liquido?: true
    juros_moratorios?: true
    honorarios_adv?: true
    status?: true
  }

  export type ProcessoMaxAggregateInputType = {
    id?: true
    hash_id?: true
    data_disponibilizacao?: true
    numero_processo?: true
    autores?: true
    advogados?: true
    reu?: true
    conteudo_publicacao?: true
    valor_principal_bruto_liquido?: true
    juros_moratorios?: true
    honorarios_adv?: true
    status?: true
  }

  export type ProcessoCountAggregateInputType = {
    id?: true
    hash_id?: true
    data_disponibilizacao?: true
    numero_processo?: true
    autores?: true
    advogados?: true
    reu?: true
    conteudo_publicacao?: true
    valor_principal_bruto_liquido?: true
    juros_moratorios?: true
    honorarios_adv?: true
    status?: true
    _all?: true
  }

  export type ProcessoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Processo to aggregate.
     */
    where?: ProcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processos to fetch.
     */
    orderBy?: ProcessoOrderByWithRelationInput | ProcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Processos
    **/
    _count?: true | ProcessoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProcessoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProcessoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessoMaxAggregateInputType
  }

  export type GetProcessoAggregateType<T extends ProcessoAggregateArgs> = {
        [P in keyof T & keyof AggregateProcesso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcesso[P]>
      : GetScalarType<T[P], AggregateProcesso[P]>
  }




  export type ProcessoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessoWhereInput
    orderBy?: ProcessoOrderByWithAggregationInput | ProcessoOrderByWithAggregationInput[]
    by: ProcessoScalarFieldEnum[] | ProcessoScalarFieldEnum
    having?: ProcessoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessoCountAggregateInputType | true
    _avg?: ProcessoAvgAggregateInputType
    _sum?: ProcessoSumAggregateInputType
    _min?: ProcessoMinAggregateInputType
    _max?: ProcessoMaxAggregateInputType
  }

  export type ProcessoGroupByOutputType = {
    id: number
    hash_id: string
    data_disponibilizacao: Date
    numero_processo: string | null
    autores: string | null
    advogados: string | null
    reu: string | null
    conteudo_publicacao: string | null
    valor_principal_bruto_liquido: string | null
    juros_moratorios: string | null
    honorarios_adv: string | null
    status: string
    _count: ProcessoCountAggregateOutputType | null
    _avg: ProcessoAvgAggregateOutputType | null
    _sum: ProcessoSumAggregateOutputType | null
    _min: ProcessoMinAggregateOutputType | null
    _max: ProcessoMaxAggregateOutputType | null
  }

  type GetProcessoGroupByPayload<T extends ProcessoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcessoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessoGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessoGroupByOutputType[P]>
        }
      >
    >


  export type ProcessoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hash_id?: boolean
    data_disponibilizacao?: boolean
    numero_processo?: boolean
    autores?: boolean
    advogados?: boolean
    reu?: boolean
    conteudo_publicacao?: boolean
    valor_principal_bruto_liquido?: boolean
    juros_moratorios?: boolean
    honorarios_adv?: boolean
    status?: boolean
  }, ExtArgs["result"]["processo"]>

  export type ProcessoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hash_id?: boolean
    data_disponibilizacao?: boolean
    numero_processo?: boolean
    autores?: boolean
    advogados?: boolean
    reu?: boolean
    conteudo_publicacao?: boolean
    valor_principal_bruto_liquido?: boolean
    juros_moratorios?: boolean
    honorarios_adv?: boolean
    status?: boolean
  }, ExtArgs["result"]["processo"]>

  export type ProcessoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hash_id?: boolean
    data_disponibilizacao?: boolean
    numero_processo?: boolean
    autores?: boolean
    advogados?: boolean
    reu?: boolean
    conteudo_publicacao?: boolean
    valor_principal_bruto_liquido?: boolean
    juros_moratorios?: boolean
    honorarios_adv?: boolean
    status?: boolean
  }, ExtArgs["result"]["processo"]>

  export type ProcessoSelectScalar = {
    id?: boolean
    hash_id?: boolean
    data_disponibilizacao?: boolean
    numero_processo?: boolean
    autores?: boolean
    advogados?: boolean
    reu?: boolean
    conteudo_publicacao?: boolean
    valor_principal_bruto_liquido?: boolean
    juros_moratorios?: boolean
    honorarios_adv?: boolean
    status?: boolean
  }

  export type ProcessoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hash_id" | "data_disponibilizacao" | "numero_processo" | "autores" | "advogados" | "reu" | "conteudo_publicacao" | "valor_principal_bruto_liquido" | "juros_moratorios" | "honorarios_adv" | "status", ExtArgs["result"]["processo"]>

  export type $ProcessoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Processo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hash_id: string
      data_disponibilizacao: Date
      numero_processo: string | null
      autores: string | null
      advogados: string | null
      reu: string | null
      conteudo_publicacao: string | null
      valor_principal_bruto_liquido: string | null
      juros_moratorios: string | null
      honorarios_adv: string | null
      status: string
    }, ExtArgs["result"]["processo"]>
    composites: {}
  }

  type ProcessoGetPayload<S extends boolean | null | undefined | ProcessoDefaultArgs> = $Result.GetResult<Prisma.$ProcessoPayload, S>

  type ProcessoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcessoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcessoCountAggregateInputType | true
    }

  export interface ProcessoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Processo'], meta: { name: 'Processo' } }
    /**
     * Find zero or one Processo that matches the filter.
     * @param {ProcessoFindUniqueArgs} args - Arguments to find a Processo
     * @example
     * // Get one Processo
     * const processo = await prisma.processo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessoFindUniqueArgs>(args: SelectSubset<T, ProcessoFindUniqueArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Processo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessoFindUniqueOrThrowArgs} args - Arguments to find a Processo
     * @example
     * // Get one Processo
     * const processo = await prisma.processo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Processo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessoFindFirstArgs} args - Arguments to find a Processo
     * @example
     * // Get one Processo
     * const processo = await prisma.processo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessoFindFirstArgs>(args?: SelectSubset<T, ProcessoFindFirstArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Processo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessoFindFirstOrThrowArgs} args - Arguments to find a Processo
     * @example
     * // Get one Processo
     * const processo = await prisma.processo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Processos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Processos
     * const processos = await prisma.processo.findMany()
     * 
     * // Get first 10 Processos
     * const processos = await prisma.processo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const processoWithIdOnly = await prisma.processo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProcessoFindManyArgs>(args?: SelectSubset<T, ProcessoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Processo.
     * @param {ProcessoCreateArgs} args - Arguments to create a Processo.
     * @example
     * // Create one Processo
     * const Processo = await prisma.processo.create({
     *   data: {
     *     // ... data to create a Processo
     *   }
     * })
     * 
     */
    create<T extends ProcessoCreateArgs>(args: SelectSubset<T, ProcessoCreateArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Processos.
     * @param {ProcessoCreateManyArgs} args - Arguments to create many Processos.
     * @example
     * // Create many Processos
     * const processo = await prisma.processo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcessoCreateManyArgs>(args?: SelectSubset<T, ProcessoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Processos and returns the data saved in the database.
     * @param {ProcessoCreateManyAndReturnArgs} args - Arguments to create many Processos.
     * @example
     * // Create many Processos
     * const processo = await prisma.processo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Processos and only return the `id`
     * const processoWithIdOnly = await prisma.processo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProcessoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProcessoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Processo.
     * @param {ProcessoDeleteArgs} args - Arguments to delete one Processo.
     * @example
     * // Delete one Processo
     * const Processo = await prisma.processo.delete({
     *   where: {
     *     // ... filter to delete one Processo
     *   }
     * })
     * 
     */
    delete<T extends ProcessoDeleteArgs>(args: SelectSubset<T, ProcessoDeleteArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Processo.
     * @param {ProcessoUpdateArgs} args - Arguments to update one Processo.
     * @example
     * // Update one Processo
     * const processo = await prisma.processo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcessoUpdateArgs>(args: SelectSubset<T, ProcessoUpdateArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Processos.
     * @param {ProcessoDeleteManyArgs} args - Arguments to filter Processos to delete.
     * @example
     * // Delete a few Processos
     * const { count } = await prisma.processo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcessoDeleteManyArgs>(args?: SelectSubset<T, ProcessoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Processos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Processos
     * const processo = await prisma.processo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcessoUpdateManyArgs>(args: SelectSubset<T, ProcessoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Processos and returns the data updated in the database.
     * @param {ProcessoUpdateManyAndReturnArgs} args - Arguments to update many Processos.
     * @example
     * // Update many Processos
     * const processo = await prisma.processo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Processos and only return the `id`
     * const processoWithIdOnly = await prisma.processo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProcessoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProcessoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Processo.
     * @param {ProcessoUpsertArgs} args - Arguments to update or create a Processo.
     * @example
     * // Update or create a Processo
     * const processo = await prisma.processo.upsert({
     *   create: {
     *     // ... data to create a Processo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Processo we want to update
     *   }
     * })
     */
    upsert<T extends ProcessoUpsertArgs>(args: SelectSubset<T, ProcessoUpsertArgs<ExtArgs>>): Prisma__ProcessoClient<$Result.GetResult<Prisma.$ProcessoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Processos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessoCountArgs} args - Arguments to filter Processos to count.
     * @example
     * // Count the number of Processos
     * const count = await prisma.processo.count({
     *   where: {
     *     // ... the filter for the Processos we want to count
     *   }
     * })
    **/
    count<T extends ProcessoCountArgs>(
      args?: Subset<T, ProcessoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Processo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProcessoAggregateArgs>(args: Subset<T, ProcessoAggregateArgs>): Prisma.PrismaPromise<GetProcessoAggregateType<T>>

    /**
     * Group by Processo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProcessoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessoGroupByArgs['orderBy'] }
        : { orderBy?: ProcessoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProcessoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Processo model
   */
  readonly fields: ProcessoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Processo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcessoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Processo model
   */
  interface ProcessoFieldRefs {
    readonly id: FieldRef<"Processo", 'Int'>
    readonly hash_id: FieldRef<"Processo", 'String'>
    readonly data_disponibilizacao: FieldRef<"Processo", 'DateTime'>
    readonly numero_processo: FieldRef<"Processo", 'String'>
    readonly autores: FieldRef<"Processo", 'String'>
    readonly advogados: FieldRef<"Processo", 'String'>
    readonly reu: FieldRef<"Processo", 'String'>
    readonly conteudo_publicacao: FieldRef<"Processo", 'String'>
    readonly valor_principal_bruto_liquido: FieldRef<"Processo", 'String'>
    readonly juros_moratorios: FieldRef<"Processo", 'String'>
    readonly honorarios_adv: FieldRef<"Processo", 'String'>
    readonly status: FieldRef<"Processo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Processo findUnique
   */
  export type ProcessoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Filter, which Processo to fetch.
     */
    where: ProcessoWhereUniqueInput
  }

  /**
   * Processo findUniqueOrThrow
   */
  export type ProcessoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Filter, which Processo to fetch.
     */
    where: ProcessoWhereUniqueInput
  }

  /**
   * Processo findFirst
   */
  export type ProcessoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Filter, which Processo to fetch.
     */
    where?: ProcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processos to fetch.
     */
    orderBy?: ProcessoOrderByWithRelationInput | ProcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Processos.
     */
    cursor?: ProcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Processos.
     */
    distinct?: ProcessoScalarFieldEnum | ProcessoScalarFieldEnum[]
  }

  /**
   * Processo findFirstOrThrow
   */
  export type ProcessoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Filter, which Processo to fetch.
     */
    where?: ProcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processos to fetch.
     */
    orderBy?: ProcessoOrderByWithRelationInput | ProcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Processos.
     */
    cursor?: ProcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Processos.
     */
    distinct?: ProcessoScalarFieldEnum | ProcessoScalarFieldEnum[]
  }

  /**
   * Processo findMany
   */
  export type ProcessoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Filter, which Processos to fetch.
     */
    where?: ProcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processos to fetch.
     */
    orderBy?: ProcessoOrderByWithRelationInput | ProcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Processos.
     */
    cursor?: ProcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processos.
     */
    skip?: number
    distinct?: ProcessoScalarFieldEnum | ProcessoScalarFieldEnum[]
  }

  /**
   * Processo create
   */
  export type ProcessoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * The data needed to create a Processo.
     */
    data: XOR<ProcessoCreateInput, ProcessoUncheckedCreateInput>
  }

  /**
   * Processo createMany
   */
  export type ProcessoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Processos.
     */
    data: ProcessoCreateManyInput | ProcessoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Processo createManyAndReturn
   */
  export type ProcessoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * The data used to create many Processos.
     */
    data: ProcessoCreateManyInput | ProcessoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Processo update
   */
  export type ProcessoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * The data needed to update a Processo.
     */
    data: XOR<ProcessoUpdateInput, ProcessoUncheckedUpdateInput>
    /**
     * Choose, which Processo to update.
     */
    where: ProcessoWhereUniqueInput
  }

  /**
   * Processo updateMany
   */
  export type ProcessoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Processos.
     */
    data: XOR<ProcessoUpdateManyMutationInput, ProcessoUncheckedUpdateManyInput>
    /**
     * Filter which Processos to update
     */
    where?: ProcessoWhereInput
    /**
     * Limit how many Processos to update.
     */
    limit?: number
  }

  /**
   * Processo updateManyAndReturn
   */
  export type ProcessoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * The data used to update Processos.
     */
    data: XOR<ProcessoUpdateManyMutationInput, ProcessoUncheckedUpdateManyInput>
    /**
     * Filter which Processos to update
     */
    where?: ProcessoWhereInput
    /**
     * Limit how many Processos to update.
     */
    limit?: number
  }

  /**
   * Processo upsert
   */
  export type ProcessoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * The filter to search for the Processo to update in case it exists.
     */
    where: ProcessoWhereUniqueInput
    /**
     * In case the Processo found by the `where` argument doesn't exist, create a new Processo with this data.
     */
    create: XOR<ProcessoCreateInput, ProcessoUncheckedCreateInput>
    /**
     * In case the Processo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessoUpdateInput, ProcessoUncheckedUpdateInput>
  }

  /**
   * Processo delete
   */
  export type ProcessoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
    /**
     * Filter which Processo to delete.
     */
    where: ProcessoWhereUniqueInput
  }

  /**
   * Processo deleteMany
   */
  export type ProcessoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Processos to delete
     */
    where?: ProcessoWhereInput
    /**
     * Limit how many Processos to delete.
     */
    limit?: number
  }

  /**
   * Processo without action
   */
  export type ProcessoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processo
     */
    select?: ProcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processo
     */
    omit?: ProcessoOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProcessoScalarFieldEnum: {
    id: 'id',
    hash_id: 'hash_id',
    data_disponibilizacao: 'data_disponibilizacao',
    numero_processo: 'numero_processo',
    autores: 'autores',
    advogados: 'advogados',
    reu: 'reu',
    conteudo_publicacao: 'conteudo_publicacao',
    valor_principal_bruto_liquido: 'valor_principal_bruto_liquido',
    juros_moratorios: 'juros_moratorios',
    honorarios_adv: 'honorarios_adv',
    status: 'status'
  };

  export type ProcessoScalarFieldEnum = (typeof ProcessoScalarFieldEnum)[keyof typeof ProcessoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProcessoWhereInput = {
    AND?: ProcessoWhereInput | ProcessoWhereInput[]
    OR?: ProcessoWhereInput[]
    NOT?: ProcessoWhereInput | ProcessoWhereInput[]
    id?: IntFilter<"Processo"> | number
    hash_id?: StringFilter<"Processo"> | string
    data_disponibilizacao?: DateTimeFilter<"Processo"> | Date | string
    numero_processo?: StringNullableFilter<"Processo"> | string | null
    autores?: StringNullableFilter<"Processo"> | string | null
    advogados?: StringNullableFilter<"Processo"> | string | null
    reu?: StringNullableFilter<"Processo"> | string | null
    conteudo_publicacao?: StringNullableFilter<"Processo"> | string | null
    valor_principal_bruto_liquido?: StringNullableFilter<"Processo"> | string | null
    juros_moratorios?: StringNullableFilter<"Processo"> | string | null
    honorarios_adv?: StringNullableFilter<"Processo"> | string | null
    status?: StringFilter<"Processo"> | string
  }

  export type ProcessoOrderByWithRelationInput = {
    id?: SortOrder
    hash_id?: SortOrder
    data_disponibilizacao?: SortOrder
    numero_processo?: SortOrderInput | SortOrder
    autores?: SortOrderInput | SortOrder
    advogados?: SortOrderInput | SortOrder
    reu?: SortOrderInput | SortOrder
    conteudo_publicacao?: SortOrderInput | SortOrder
    valor_principal_bruto_liquido?: SortOrderInput | SortOrder
    juros_moratorios?: SortOrderInput | SortOrder
    honorarios_adv?: SortOrderInput | SortOrder
    status?: SortOrder
  }

  export type ProcessoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    hash_id?: string
    AND?: ProcessoWhereInput | ProcessoWhereInput[]
    OR?: ProcessoWhereInput[]
    NOT?: ProcessoWhereInput | ProcessoWhereInput[]
    data_disponibilizacao?: DateTimeFilter<"Processo"> | Date | string
    numero_processo?: StringNullableFilter<"Processo"> | string | null
    autores?: StringNullableFilter<"Processo"> | string | null
    advogados?: StringNullableFilter<"Processo"> | string | null
    reu?: StringNullableFilter<"Processo"> | string | null
    conteudo_publicacao?: StringNullableFilter<"Processo"> | string | null
    valor_principal_bruto_liquido?: StringNullableFilter<"Processo"> | string | null
    juros_moratorios?: StringNullableFilter<"Processo"> | string | null
    honorarios_adv?: StringNullableFilter<"Processo"> | string | null
    status?: StringFilter<"Processo"> | string
  }, "id" | "hash_id">

  export type ProcessoOrderByWithAggregationInput = {
    id?: SortOrder
    hash_id?: SortOrder
    data_disponibilizacao?: SortOrder
    numero_processo?: SortOrderInput | SortOrder
    autores?: SortOrderInput | SortOrder
    advogados?: SortOrderInput | SortOrder
    reu?: SortOrderInput | SortOrder
    conteudo_publicacao?: SortOrderInput | SortOrder
    valor_principal_bruto_liquido?: SortOrderInput | SortOrder
    juros_moratorios?: SortOrderInput | SortOrder
    honorarios_adv?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: ProcessoCountOrderByAggregateInput
    _avg?: ProcessoAvgOrderByAggregateInput
    _max?: ProcessoMaxOrderByAggregateInput
    _min?: ProcessoMinOrderByAggregateInput
    _sum?: ProcessoSumOrderByAggregateInput
  }

  export type ProcessoScalarWhereWithAggregatesInput = {
    AND?: ProcessoScalarWhereWithAggregatesInput | ProcessoScalarWhereWithAggregatesInput[]
    OR?: ProcessoScalarWhereWithAggregatesInput[]
    NOT?: ProcessoScalarWhereWithAggregatesInput | ProcessoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Processo"> | number
    hash_id?: StringWithAggregatesFilter<"Processo"> | string
    data_disponibilizacao?: DateTimeWithAggregatesFilter<"Processo"> | Date | string
    numero_processo?: StringNullableWithAggregatesFilter<"Processo"> | string | null
    autores?: StringNullableWithAggregatesFilter<"Processo"> | string | null
    advogados?: StringNullableWithAggregatesFilter<"Processo"> | string | null
    reu?: StringNullableWithAggregatesFilter<"Processo"> | string | null
    conteudo_publicacao?: StringNullableWithAggregatesFilter<"Processo"> | string | null
    valor_principal_bruto_liquido?: StringNullableWithAggregatesFilter<"Processo"> | string | null
    juros_moratorios?: StringNullableWithAggregatesFilter<"Processo"> | string | null
    honorarios_adv?: StringNullableWithAggregatesFilter<"Processo"> | string | null
    status?: StringWithAggregatesFilter<"Processo"> | string
  }

  export type ProcessoCreateInput = {
    hash_id: string
    data_disponibilizacao: Date | string
    numero_processo?: string | null
    autores?: string | null
    advogados?: string | null
    reu?: string | null
    conteudo_publicacao?: string | null
    valor_principal_bruto_liquido?: string | null
    juros_moratorios?: string | null
    honorarios_adv?: string | null
    status?: string
  }

  export type ProcessoUncheckedCreateInput = {
    id?: number
    hash_id: string
    data_disponibilizacao: Date | string
    numero_processo?: string | null
    autores?: string | null
    advogados?: string | null
    reu?: string | null
    conteudo_publicacao?: string | null
    valor_principal_bruto_liquido?: string | null
    juros_moratorios?: string | null
    honorarios_adv?: string | null
    status?: string
  }

  export type ProcessoUpdateInput = {
    hash_id?: StringFieldUpdateOperationsInput | string
    data_disponibilizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_processo?: NullableStringFieldUpdateOperationsInput | string | null
    autores?: NullableStringFieldUpdateOperationsInput | string | null
    advogados?: NullableStringFieldUpdateOperationsInput | string | null
    reu?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo_publicacao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_principal_bruto_liquido?: NullableStringFieldUpdateOperationsInput | string | null
    juros_moratorios?: NullableStringFieldUpdateOperationsInput | string | null
    honorarios_adv?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ProcessoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hash_id?: StringFieldUpdateOperationsInput | string
    data_disponibilizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_processo?: NullableStringFieldUpdateOperationsInput | string | null
    autores?: NullableStringFieldUpdateOperationsInput | string | null
    advogados?: NullableStringFieldUpdateOperationsInput | string | null
    reu?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo_publicacao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_principal_bruto_liquido?: NullableStringFieldUpdateOperationsInput | string | null
    juros_moratorios?: NullableStringFieldUpdateOperationsInput | string | null
    honorarios_adv?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ProcessoCreateManyInput = {
    id?: number
    hash_id: string
    data_disponibilizacao: Date | string
    numero_processo?: string | null
    autores?: string | null
    advogados?: string | null
    reu?: string | null
    conteudo_publicacao?: string | null
    valor_principal_bruto_liquido?: string | null
    juros_moratorios?: string | null
    honorarios_adv?: string | null
    status?: string
  }

  export type ProcessoUpdateManyMutationInput = {
    hash_id?: StringFieldUpdateOperationsInput | string
    data_disponibilizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_processo?: NullableStringFieldUpdateOperationsInput | string | null
    autores?: NullableStringFieldUpdateOperationsInput | string | null
    advogados?: NullableStringFieldUpdateOperationsInput | string | null
    reu?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo_publicacao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_principal_bruto_liquido?: NullableStringFieldUpdateOperationsInput | string | null
    juros_moratorios?: NullableStringFieldUpdateOperationsInput | string | null
    honorarios_adv?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ProcessoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hash_id?: StringFieldUpdateOperationsInput | string
    data_disponibilizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_processo?: NullableStringFieldUpdateOperationsInput | string | null
    autores?: NullableStringFieldUpdateOperationsInput | string | null
    advogados?: NullableStringFieldUpdateOperationsInput | string | null
    reu?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo_publicacao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_principal_bruto_liquido?: NullableStringFieldUpdateOperationsInput | string | null
    juros_moratorios?: NullableStringFieldUpdateOperationsInput | string | null
    honorarios_adv?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProcessoCountOrderByAggregateInput = {
    id?: SortOrder
    hash_id?: SortOrder
    data_disponibilizacao?: SortOrder
    numero_processo?: SortOrder
    autores?: SortOrder
    advogados?: SortOrder
    reu?: SortOrder
    conteudo_publicacao?: SortOrder
    valor_principal_bruto_liquido?: SortOrder
    juros_moratorios?: SortOrder
    honorarios_adv?: SortOrder
    status?: SortOrder
  }

  export type ProcessoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProcessoMaxOrderByAggregateInput = {
    id?: SortOrder
    hash_id?: SortOrder
    data_disponibilizacao?: SortOrder
    numero_processo?: SortOrder
    autores?: SortOrder
    advogados?: SortOrder
    reu?: SortOrder
    conteudo_publicacao?: SortOrder
    valor_principal_bruto_liquido?: SortOrder
    juros_moratorios?: SortOrder
    honorarios_adv?: SortOrder
    status?: SortOrder
  }

  export type ProcessoMinOrderByAggregateInput = {
    id?: SortOrder
    hash_id?: SortOrder
    data_disponibilizacao?: SortOrder
    numero_processo?: SortOrder
    autores?: SortOrder
    advogados?: SortOrder
    reu?: SortOrder
    conteudo_publicacao?: SortOrder
    valor_principal_bruto_liquido?: SortOrder
    juros_moratorios?: SortOrder
    honorarios_adv?: SortOrder
    status?: SortOrder
  }

  export type ProcessoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}