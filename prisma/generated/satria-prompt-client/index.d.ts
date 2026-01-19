
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
 * Model activity_logs
 * 
 */
export type activity_logs = $Result.DefaultSelection<Prisma.$activity_logsPayload>
/**
 * Model error_logs
 * 
 */
export type error_logs = $Result.DefaultSelection<Prisma.$error_logsPayload>
/**
 * Model ms_group_products
 * 
 */
export type ms_group_products = $Result.DefaultSelection<Prisma.$ms_group_productsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Activity_logs
 * const activity_logs = await prisma.activity_logs.findMany()
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
   * // Fetch zero or more Activity_logs
   * const activity_logs = await prisma.activity_logs.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.activity_logs`: Exposes CRUD operations for the **activity_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activity_logs
    * const activity_logs = await prisma.activity_logs.findMany()
    * ```
    */
  get activity_logs(): Prisma.activity_logsDelegate<ExtArgs>;

  /**
   * `prisma.error_logs`: Exposes CRUD operations for the **error_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Error_logs
    * const error_logs = await prisma.error_logs.findMany()
    * ```
    */
  get error_logs(): Prisma.error_logsDelegate<ExtArgs>;

  /**
   * `prisma.ms_group_products`: Exposes CRUD operations for the **ms_group_products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ms_group_products
    * const ms_group_products = await prisma.ms_group_products.findMany()
    * ```
    */
  get ms_group_products(): Prisma.ms_group_productsDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    activity_logs: 'activity_logs',
    error_logs: 'error_logs',
    ms_group_products: 'ms_group_products'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    satria?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "activity_logs" | "error_logs" | "ms_group_products"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      activity_logs: {
        payload: Prisma.$activity_logsPayload<ExtArgs>
        fields: Prisma.activity_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.activity_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.activity_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>
          }
          findFirst: {
            args: Prisma.activity_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.activity_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>
          }
          findMany: {
            args: Prisma.activity_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>[]
          }
          create: {
            args: Prisma.activity_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>
          }
          createMany: {
            args: Prisma.activity_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.activity_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>
          }
          update: {
            args: Prisma.activity_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>
          }
          deleteMany: {
            args: Prisma.activity_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.activity_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.activity_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>
          }
          aggregate: {
            args: Prisma.Activity_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity_logs>
          }
          groupBy: {
            args: Prisma.activity_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Activity_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.activity_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Activity_logsCountAggregateOutputType> | number
          }
        }
      }
      error_logs: {
        payload: Prisma.$error_logsPayload<ExtArgs>
        fields: Prisma.error_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.error_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$error_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.error_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$error_logsPayload>
          }
          findFirst: {
            args: Prisma.error_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$error_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.error_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$error_logsPayload>
          }
          findMany: {
            args: Prisma.error_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$error_logsPayload>[]
          }
          create: {
            args: Prisma.error_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$error_logsPayload>
          }
          createMany: {
            args: Prisma.error_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.error_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$error_logsPayload>
          }
          update: {
            args: Prisma.error_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$error_logsPayload>
          }
          deleteMany: {
            args: Prisma.error_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.error_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.error_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$error_logsPayload>
          }
          aggregate: {
            args: Prisma.Error_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateError_logs>
          }
          groupBy: {
            args: Prisma.error_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Error_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.error_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Error_logsCountAggregateOutputType> | number
          }
        }
      }
      ms_group_products: {
        payload: Prisma.$ms_group_productsPayload<ExtArgs>
        fields: Prisma.ms_group_productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ms_group_productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ms_group_productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ms_group_productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ms_group_productsPayload>
          }
          findFirst: {
            args: Prisma.ms_group_productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ms_group_productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ms_group_productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ms_group_productsPayload>
          }
          findMany: {
            args: Prisma.ms_group_productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ms_group_productsPayload>[]
          }
          create: {
            args: Prisma.ms_group_productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ms_group_productsPayload>
          }
          createMany: {
            args: Prisma.ms_group_productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ms_group_productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ms_group_productsPayload>
          }
          update: {
            args: Prisma.ms_group_productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ms_group_productsPayload>
          }
          deleteMany: {
            args: Prisma.ms_group_productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ms_group_productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ms_group_productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ms_group_productsPayload>
          }
          aggregate: {
            args: Prisma.Ms_group_productsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMs_group_products>
          }
          groupBy: {
            args: Prisma.ms_group_productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ms_group_productsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ms_group_productsCountArgs<ExtArgs>
            result: $Utils.Optional<Ms_group_productsCountAggregateOutputType> | number
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
   * Model activity_logs
   */

  export type AggregateActivity_logs = {
    _count: Activity_logsCountAggregateOutputType | null
    _avg: Activity_logsAvgAggregateOutputType | null
    _sum: Activity_logsSumAggregateOutputType | null
    _min: Activity_logsMinAggregateOutputType | null
    _max: Activity_logsMaxAggregateOutputType | null
  }

  export type Activity_logsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Activity_logsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Activity_logsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    action: string | null
    description: string | null
    ip_address: string | null
    user_agent: string | null
    created_at: Date | null
  }

  export type Activity_logsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    action: string | null
    description: string | null
    ip_address: string | null
    user_agent: string | null
    created_at: Date | null
  }

  export type Activity_logsCountAggregateOutputType = {
    id: number
    user_id: number
    action: number
    description: number
    ip_address: number
    user_agent: number
    created_at: number
    _all: number
  }


  export type Activity_logsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Activity_logsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Activity_logsMinAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    description?: true
    ip_address?: true
    user_agent?: true
    created_at?: true
  }

  export type Activity_logsMaxAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    description?: true
    ip_address?: true
    user_agent?: true
    created_at?: true
  }

  export type Activity_logsCountAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    description?: true
    ip_address?: true
    user_agent?: true
    created_at?: true
    _all?: true
  }

  export type Activity_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activity_logs to aggregate.
     */
    where?: activity_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activity_logs to fetch.
     */
    orderBy?: activity_logsOrderByWithRelationInput | activity_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: activity_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activity_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activity_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned activity_logs
    **/
    _count?: true | Activity_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Activity_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Activity_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Activity_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Activity_logsMaxAggregateInputType
  }

  export type GetActivity_logsAggregateType<T extends Activity_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity_logs[P]>
      : GetScalarType<T[P], AggregateActivity_logs[P]>
  }




  export type activity_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activity_logsWhereInput
    orderBy?: activity_logsOrderByWithAggregationInput | activity_logsOrderByWithAggregationInput[]
    by: Activity_logsScalarFieldEnum[] | Activity_logsScalarFieldEnum
    having?: activity_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Activity_logsCountAggregateInputType | true
    _avg?: Activity_logsAvgAggregateInputType
    _sum?: Activity_logsSumAggregateInputType
    _min?: Activity_logsMinAggregateInputType
    _max?: Activity_logsMaxAggregateInputType
  }

  export type Activity_logsGroupByOutputType = {
    id: number
    user_id: number | null
    action: string | null
    description: string | null
    ip_address: string | null
    user_agent: string | null
    created_at: Date | null
    _count: Activity_logsCountAggregateOutputType | null
    _avg: Activity_logsAvgAggregateOutputType | null
    _sum: Activity_logsSumAggregateOutputType | null
    _min: Activity_logsMinAggregateOutputType | null
    _max: Activity_logsMaxAggregateOutputType | null
  }

  type GetActivity_logsGroupByPayload<T extends activity_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Activity_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Activity_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Activity_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Activity_logsGroupByOutputType[P]>
        }
      >
    >


  export type activity_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action?: boolean
    description?: boolean
    ip_address?: boolean
    user_agent?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["activity_logs"]>


  export type activity_logsSelectScalar = {
    id?: boolean
    user_id?: boolean
    action?: boolean
    description?: boolean
    ip_address?: boolean
    user_agent?: boolean
    created_at?: boolean
  }


  export type $activity_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "activity_logs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      action: string | null
      description: string | null
      ip_address: string | null
      user_agent: string | null
      created_at: Date | null
    }, ExtArgs["result"]["activity_logs"]>
    composites: {}
  }

  type activity_logsGetPayload<S extends boolean | null | undefined | activity_logsDefaultArgs> = $Result.GetResult<Prisma.$activity_logsPayload, S>

  type activity_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<activity_logsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Activity_logsCountAggregateInputType | true
    }

  export interface activity_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['activity_logs'], meta: { name: 'activity_logs' } }
    /**
     * Find zero or one Activity_logs that matches the filter.
     * @param {activity_logsFindUniqueArgs} args - Arguments to find a Activity_logs
     * @example
     * // Get one Activity_logs
     * const activity_logs = await prisma.activity_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends activity_logsFindUniqueArgs>(args: SelectSubset<T, activity_logsFindUniqueArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Activity_logs that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {activity_logsFindUniqueOrThrowArgs} args - Arguments to find a Activity_logs
     * @example
     * // Get one Activity_logs
     * const activity_logs = await prisma.activity_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends activity_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, activity_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Activity_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logsFindFirstArgs} args - Arguments to find a Activity_logs
     * @example
     * // Get one Activity_logs
     * const activity_logs = await prisma.activity_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends activity_logsFindFirstArgs>(args?: SelectSubset<T, activity_logsFindFirstArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Activity_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logsFindFirstOrThrowArgs} args - Arguments to find a Activity_logs
     * @example
     * // Get one Activity_logs
     * const activity_logs = await prisma.activity_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends activity_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, activity_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Activity_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activity_logs
     * const activity_logs = await prisma.activity_logs.findMany()
     * 
     * // Get first 10 Activity_logs
     * const activity_logs = await prisma.activity_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activity_logsWithIdOnly = await prisma.activity_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends activity_logsFindManyArgs>(args?: SelectSubset<T, activity_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Activity_logs.
     * @param {activity_logsCreateArgs} args - Arguments to create a Activity_logs.
     * @example
     * // Create one Activity_logs
     * const Activity_logs = await prisma.activity_logs.create({
     *   data: {
     *     // ... data to create a Activity_logs
     *   }
     * })
     * 
     */
    create<T extends activity_logsCreateArgs>(args: SelectSubset<T, activity_logsCreateArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Activity_logs.
     * @param {activity_logsCreateManyArgs} args - Arguments to create many Activity_logs.
     * @example
     * // Create many Activity_logs
     * const activity_logs = await prisma.activity_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends activity_logsCreateManyArgs>(args?: SelectSubset<T, activity_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Activity_logs.
     * @param {activity_logsDeleteArgs} args - Arguments to delete one Activity_logs.
     * @example
     * // Delete one Activity_logs
     * const Activity_logs = await prisma.activity_logs.delete({
     *   where: {
     *     // ... filter to delete one Activity_logs
     *   }
     * })
     * 
     */
    delete<T extends activity_logsDeleteArgs>(args: SelectSubset<T, activity_logsDeleteArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Activity_logs.
     * @param {activity_logsUpdateArgs} args - Arguments to update one Activity_logs.
     * @example
     * // Update one Activity_logs
     * const activity_logs = await prisma.activity_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends activity_logsUpdateArgs>(args: SelectSubset<T, activity_logsUpdateArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Activity_logs.
     * @param {activity_logsDeleteManyArgs} args - Arguments to filter Activity_logs to delete.
     * @example
     * // Delete a few Activity_logs
     * const { count } = await prisma.activity_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends activity_logsDeleteManyArgs>(args?: SelectSubset<T, activity_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activity_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activity_logs
     * const activity_logs = await prisma.activity_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends activity_logsUpdateManyArgs>(args: SelectSubset<T, activity_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Activity_logs.
     * @param {activity_logsUpsertArgs} args - Arguments to update or create a Activity_logs.
     * @example
     * // Update or create a Activity_logs
     * const activity_logs = await prisma.activity_logs.upsert({
     *   create: {
     *     // ... data to create a Activity_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity_logs we want to update
     *   }
     * })
     */
    upsert<T extends activity_logsUpsertArgs>(args: SelectSubset<T, activity_logsUpsertArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Activity_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logsCountArgs} args - Arguments to filter Activity_logs to count.
     * @example
     * // Count the number of Activity_logs
     * const count = await prisma.activity_logs.count({
     *   where: {
     *     // ... the filter for the Activity_logs we want to count
     *   }
     * })
    **/
    count<T extends activity_logsCountArgs>(
      args?: Subset<T, activity_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Activity_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Activity_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Activity_logsAggregateArgs>(args: Subset<T, Activity_logsAggregateArgs>): Prisma.PrismaPromise<GetActivity_logsAggregateType<T>>

    /**
     * Group by Activity_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logsGroupByArgs} args - Group by arguments.
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
      T extends activity_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: activity_logsGroupByArgs['orderBy'] }
        : { orderBy?: activity_logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, activity_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivity_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the activity_logs model
   */
  readonly fields: activity_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for activity_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__activity_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the activity_logs model
   */ 
  interface activity_logsFieldRefs {
    readonly id: FieldRef<"activity_logs", 'Int'>
    readonly user_id: FieldRef<"activity_logs", 'Int'>
    readonly action: FieldRef<"activity_logs", 'String'>
    readonly description: FieldRef<"activity_logs", 'String'>
    readonly ip_address: FieldRef<"activity_logs", 'String'>
    readonly user_agent: FieldRef<"activity_logs", 'String'>
    readonly created_at: FieldRef<"activity_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * activity_logs findUnique
   */
  export type activity_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Filter, which activity_logs to fetch.
     */
    where: activity_logsWhereUniqueInput
  }

  /**
   * activity_logs findUniqueOrThrow
   */
  export type activity_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Filter, which activity_logs to fetch.
     */
    where: activity_logsWhereUniqueInput
  }

  /**
   * activity_logs findFirst
   */
  export type activity_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Filter, which activity_logs to fetch.
     */
    where?: activity_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activity_logs to fetch.
     */
    orderBy?: activity_logsOrderByWithRelationInput | activity_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activity_logs.
     */
    cursor?: activity_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activity_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activity_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activity_logs.
     */
    distinct?: Activity_logsScalarFieldEnum | Activity_logsScalarFieldEnum[]
  }

  /**
   * activity_logs findFirstOrThrow
   */
  export type activity_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Filter, which activity_logs to fetch.
     */
    where?: activity_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activity_logs to fetch.
     */
    orderBy?: activity_logsOrderByWithRelationInput | activity_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activity_logs.
     */
    cursor?: activity_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activity_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activity_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activity_logs.
     */
    distinct?: Activity_logsScalarFieldEnum | Activity_logsScalarFieldEnum[]
  }

  /**
   * activity_logs findMany
   */
  export type activity_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Filter, which activity_logs to fetch.
     */
    where?: activity_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activity_logs to fetch.
     */
    orderBy?: activity_logsOrderByWithRelationInput | activity_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing activity_logs.
     */
    cursor?: activity_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activity_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activity_logs.
     */
    skip?: number
    distinct?: Activity_logsScalarFieldEnum | Activity_logsScalarFieldEnum[]
  }

  /**
   * activity_logs create
   */
  export type activity_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * The data needed to create a activity_logs.
     */
    data?: XOR<activity_logsCreateInput, activity_logsUncheckedCreateInput>
  }

  /**
   * activity_logs createMany
   */
  export type activity_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many activity_logs.
     */
    data: activity_logsCreateManyInput | activity_logsCreateManyInput[]
  }

  /**
   * activity_logs update
   */
  export type activity_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * The data needed to update a activity_logs.
     */
    data: XOR<activity_logsUpdateInput, activity_logsUncheckedUpdateInput>
    /**
     * Choose, which activity_logs to update.
     */
    where: activity_logsWhereUniqueInput
  }

  /**
   * activity_logs updateMany
   */
  export type activity_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update activity_logs.
     */
    data: XOR<activity_logsUpdateManyMutationInput, activity_logsUncheckedUpdateManyInput>
    /**
     * Filter which activity_logs to update
     */
    where?: activity_logsWhereInput
  }

  /**
   * activity_logs upsert
   */
  export type activity_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * The filter to search for the activity_logs to update in case it exists.
     */
    where: activity_logsWhereUniqueInput
    /**
     * In case the activity_logs found by the `where` argument doesn't exist, create a new activity_logs with this data.
     */
    create: XOR<activity_logsCreateInput, activity_logsUncheckedCreateInput>
    /**
     * In case the activity_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<activity_logsUpdateInput, activity_logsUncheckedUpdateInput>
  }

  /**
   * activity_logs delete
   */
  export type activity_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Filter which activity_logs to delete.
     */
    where: activity_logsWhereUniqueInput
  }

  /**
   * activity_logs deleteMany
   */
  export type activity_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activity_logs to delete
     */
    where?: activity_logsWhereInput
  }

  /**
   * activity_logs without action
   */
  export type activity_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
  }


  /**
   * Model error_logs
   */

  export type AggregateError_logs = {
    _count: Error_logsCountAggregateOutputType | null
    _avg: Error_logsAvgAggregateOutputType | null
    _sum: Error_logsSumAggregateOutputType | null
    _min: Error_logsMinAggregateOutputType | null
    _max: Error_logsMaxAggregateOutputType | null
  }

  export type Error_logsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Error_logsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Error_logsMinAggregateOutputType = {
    id: number | null
    message: string | null
    stack_trace: string | null
    code: string | null
    method: string | null
    url: string | null
    params: string | null
    query: string | null
    body: string | null
    headers: string | null
    user_id: number | null
    ip_address: string | null
    created_at: Date | null
  }

  export type Error_logsMaxAggregateOutputType = {
    id: number | null
    message: string | null
    stack_trace: string | null
    code: string | null
    method: string | null
    url: string | null
    params: string | null
    query: string | null
    body: string | null
    headers: string | null
    user_id: number | null
    ip_address: string | null
    created_at: Date | null
  }

  export type Error_logsCountAggregateOutputType = {
    id: number
    message: number
    stack_trace: number
    code: number
    method: number
    url: number
    params: number
    query: number
    body: number
    headers: number
    user_id: number
    ip_address: number
    created_at: number
    _all: number
  }


  export type Error_logsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Error_logsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Error_logsMinAggregateInputType = {
    id?: true
    message?: true
    stack_trace?: true
    code?: true
    method?: true
    url?: true
    params?: true
    query?: true
    body?: true
    headers?: true
    user_id?: true
    ip_address?: true
    created_at?: true
  }

  export type Error_logsMaxAggregateInputType = {
    id?: true
    message?: true
    stack_trace?: true
    code?: true
    method?: true
    url?: true
    params?: true
    query?: true
    body?: true
    headers?: true
    user_id?: true
    ip_address?: true
    created_at?: true
  }

  export type Error_logsCountAggregateInputType = {
    id?: true
    message?: true
    stack_trace?: true
    code?: true
    method?: true
    url?: true
    params?: true
    query?: true
    body?: true
    headers?: true
    user_id?: true
    ip_address?: true
    created_at?: true
    _all?: true
  }

  export type Error_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which error_logs to aggregate.
     */
    where?: error_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of error_logs to fetch.
     */
    orderBy?: error_logsOrderByWithRelationInput | error_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: error_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` error_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` error_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned error_logs
    **/
    _count?: true | Error_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Error_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Error_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Error_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Error_logsMaxAggregateInputType
  }

  export type GetError_logsAggregateType<T extends Error_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateError_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateError_logs[P]>
      : GetScalarType<T[P], AggregateError_logs[P]>
  }




  export type error_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: error_logsWhereInput
    orderBy?: error_logsOrderByWithAggregationInput | error_logsOrderByWithAggregationInput[]
    by: Error_logsScalarFieldEnum[] | Error_logsScalarFieldEnum
    having?: error_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Error_logsCountAggregateInputType | true
    _avg?: Error_logsAvgAggregateInputType
    _sum?: Error_logsSumAggregateInputType
    _min?: Error_logsMinAggregateInputType
    _max?: Error_logsMaxAggregateInputType
  }

  export type Error_logsGroupByOutputType = {
    id: number
    message: string | null
    stack_trace: string | null
    code: string | null
    method: string | null
    url: string | null
    params: string | null
    query: string | null
    body: string | null
    headers: string | null
    user_id: number | null
    ip_address: string | null
    created_at: Date | null
    _count: Error_logsCountAggregateOutputType | null
    _avg: Error_logsAvgAggregateOutputType | null
    _sum: Error_logsSumAggregateOutputType | null
    _min: Error_logsMinAggregateOutputType | null
    _max: Error_logsMaxAggregateOutputType | null
  }

  type GetError_logsGroupByPayload<T extends error_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Error_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Error_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Error_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Error_logsGroupByOutputType[P]>
        }
      >
    >


  export type error_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    stack_trace?: boolean
    code?: boolean
    method?: boolean
    url?: boolean
    params?: boolean
    query?: boolean
    body?: boolean
    headers?: boolean
    user_id?: boolean
    ip_address?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["error_logs"]>


  export type error_logsSelectScalar = {
    id?: boolean
    message?: boolean
    stack_trace?: boolean
    code?: boolean
    method?: boolean
    url?: boolean
    params?: boolean
    query?: boolean
    body?: boolean
    headers?: boolean
    user_id?: boolean
    ip_address?: boolean
    created_at?: boolean
  }


  export type $error_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "error_logs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message: string | null
      stack_trace: string | null
      code: string | null
      method: string | null
      url: string | null
      params: string | null
      query: string | null
      body: string | null
      headers: string | null
      user_id: number | null
      ip_address: string | null
      created_at: Date | null
    }, ExtArgs["result"]["error_logs"]>
    composites: {}
  }

  type error_logsGetPayload<S extends boolean | null | undefined | error_logsDefaultArgs> = $Result.GetResult<Prisma.$error_logsPayload, S>

  type error_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<error_logsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Error_logsCountAggregateInputType | true
    }

  export interface error_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['error_logs'], meta: { name: 'error_logs' } }
    /**
     * Find zero or one Error_logs that matches the filter.
     * @param {error_logsFindUniqueArgs} args - Arguments to find a Error_logs
     * @example
     * // Get one Error_logs
     * const error_logs = await prisma.error_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends error_logsFindUniqueArgs>(args: SelectSubset<T, error_logsFindUniqueArgs<ExtArgs>>): Prisma__error_logsClient<$Result.GetResult<Prisma.$error_logsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Error_logs that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {error_logsFindUniqueOrThrowArgs} args - Arguments to find a Error_logs
     * @example
     * // Get one Error_logs
     * const error_logs = await prisma.error_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends error_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, error_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__error_logsClient<$Result.GetResult<Prisma.$error_logsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Error_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {error_logsFindFirstArgs} args - Arguments to find a Error_logs
     * @example
     * // Get one Error_logs
     * const error_logs = await prisma.error_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends error_logsFindFirstArgs>(args?: SelectSubset<T, error_logsFindFirstArgs<ExtArgs>>): Prisma__error_logsClient<$Result.GetResult<Prisma.$error_logsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Error_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {error_logsFindFirstOrThrowArgs} args - Arguments to find a Error_logs
     * @example
     * // Get one Error_logs
     * const error_logs = await prisma.error_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends error_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, error_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__error_logsClient<$Result.GetResult<Prisma.$error_logsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Error_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {error_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Error_logs
     * const error_logs = await prisma.error_logs.findMany()
     * 
     * // Get first 10 Error_logs
     * const error_logs = await prisma.error_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const error_logsWithIdOnly = await prisma.error_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends error_logsFindManyArgs>(args?: SelectSubset<T, error_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$error_logsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Error_logs.
     * @param {error_logsCreateArgs} args - Arguments to create a Error_logs.
     * @example
     * // Create one Error_logs
     * const Error_logs = await prisma.error_logs.create({
     *   data: {
     *     // ... data to create a Error_logs
     *   }
     * })
     * 
     */
    create<T extends error_logsCreateArgs>(args: SelectSubset<T, error_logsCreateArgs<ExtArgs>>): Prisma__error_logsClient<$Result.GetResult<Prisma.$error_logsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Error_logs.
     * @param {error_logsCreateManyArgs} args - Arguments to create many Error_logs.
     * @example
     * // Create many Error_logs
     * const error_logs = await prisma.error_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends error_logsCreateManyArgs>(args?: SelectSubset<T, error_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Error_logs.
     * @param {error_logsDeleteArgs} args - Arguments to delete one Error_logs.
     * @example
     * // Delete one Error_logs
     * const Error_logs = await prisma.error_logs.delete({
     *   where: {
     *     // ... filter to delete one Error_logs
     *   }
     * })
     * 
     */
    delete<T extends error_logsDeleteArgs>(args: SelectSubset<T, error_logsDeleteArgs<ExtArgs>>): Prisma__error_logsClient<$Result.GetResult<Prisma.$error_logsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Error_logs.
     * @param {error_logsUpdateArgs} args - Arguments to update one Error_logs.
     * @example
     * // Update one Error_logs
     * const error_logs = await prisma.error_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends error_logsUpdateArgs>(args: SelectSubset<T, error_logsUpdateArgs<ExtArgs>>): Prisma__error_logsClient<$Result.GetResult<Prisma.$error_logsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Error_logs.
     * @param {error_logsDeleteManyArgs} args - Arguments to filter Error_logs to delete.
     * @example
     * // Delete a few Error_logs
     * const { count } = await prisma.error_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends error_logsDeleteManyArgs>(args?: SelectSubset<T, error_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Error_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {error_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Error_logs
     * const error_logs = await prisma.error_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends error_logsUpdateManyArgs>(args: SelectSubset<T, error_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Error_logs.
     * @param {error_logsUpsertArgs} args - Arguments to update or create a Error_logs.
     * @example
     * // Update or create a Error_logs
     * const error_logs = await prisma.error_logs.upsert({
     *   create: {
     *     // ... data to create a Error_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Error_logs we want to update
     *   }
     * })
     */
    upsert<T extends error_logsUpsertArgs>(args: SelectSubset<T, error_logsUpsertArgs<ExtArgs>>): Prisma__error_logsClient<$Result.GetResult<Prisma.$error_logsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Error_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {error_logsCountArgs} args - Arguments to filter Error_logs to count.
     * @example
     * // Count the number of Error_logs
     * const count = await prisma.error_logs.count({
     *   where: {
     *     // ... the filter for the Error_logs we want to count
     *   }
     * })
    **/
    count<T extends error_logsCountArgs>(
      args?: Subset<T, error_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Error_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Error_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Error_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Error_logsAggregateArgs>(args: Subset<T, Error_logsAggregateArgs>): Prisma.PrismaPromise<GetError_logsAggregateType<T>>

    /**
     * Group by Error_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {error_logsGroupByArgs} args - Group by arguments.
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
      T extends error_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: error_logsGroupByArgs['orderBy'] }
        : { orderBy?: error_logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, error_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetError_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the error_logs model
   */
  readonly fields: error_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for error_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__error_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the error_logs model
   */ 
  interface error_logsFieldRefs {
    readonly id: FieldRef<"error_logs", 'Int'>
    readonly message: FieldRef<"error_logs", 'String'>
    readonly stack_trace: FieldRef<"error_logs", 'String'>
    readonly code: FieldRef<"error_logs", 'String'>
    readonly method: FieldRef<"error_logs", 'String'>
    readonly url: FieldRef<"error_logs", 'String'>
    readonly params: FieldRef<"error_logs", 'String'>
    readonly query: FieldRef<"error_logs", 'String'>
    readonly body: FieldRef<"error_logs", 'String'>
    readonly headers: FieldRef<"error_logs", 'String'>
    readonly user_id: FieldRef<"error_logs", 'Int'>
    readonly ip_address: FieldRef<"error_logs", 'String'>
    readonly created_at: FieldRef<"error_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * error_logs findUnique
   */
  export type error_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the error_logs
     */
    select?: error_logsSelect<ExtArgs> | null
    /**
     * Filter, which error_logs to fetch.
     */
    where: error_logsWhereUniqueInput
  }

  /**
   * error_logs findUniqueOrThrow
   */
  export type error_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the error_logs
     */
    select?: error_logsSelect<ExtArgs> | null
    /**
     * Filter, which error_logs to fetch.
     */
    where: error_logsWhereUniqueInput
  }

  /**
   * error_logs findFirst
   */
  export type error_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the error_logs
     */
    select?: error_logsSelect<ExtArgs> | null
    /**
     * Filter, which error_logs to fetch.
     */
    where?: error_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of error_logs to fetch.
     */
    orderBy?: error_logsOrderByWithRelationInput | error_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for error_logs.
     */
    cursor?: error_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` error_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` error_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of error_logs.
     */
    distinct?: Error_logsScalarFieldEnum | Error_logsScalarFieldEnum[]
  }

  /**
   * error_logs findFirstOrThrow
   */
  export type error_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the error_logs
     */
    select?: error_logsSelect<ExtArgs> | null
    /**
     * Filter, which error_logs to fetch.
     */
    where?: error_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of error_logs to fetch.
     */
    orderBy?: error_logsOrderByWithRelationInput | error_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for error_logs.
     */
    cursor?: error_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` error_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` error_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of error_logs.
     */
    distinct?: Error_logsScalarFieldEnum | Error_logsScalarFieldEnum[]
  }

  /**
   * error_logs findMany
   */
  export type error_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the error_logs
     */
    select?: error_logsSelect<ExtArgs> | null
    /**
     * Filter, which error_logs to fetch.
     */
    where?: error_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of error_logs to fetch.
     */
    orderBy?: error_logsOrderByWithRelationInput | error_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing error_logs.
     */
    cursor?: error_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` error_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` error_logs.
     */
    skip?: number
    distinct?: Error_logsScalarFieldEnum | Error_logsScalarFieldEnum[]
  }

  /**
   * error_logs create
   */
  export type error_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the error_logs
     */
    select?: error_logsSelect<ExtArgs> | null
    /**
     * The data needed to create a error_logs.
     */
    data?: XOR<error_logsCreateInput, error_logsUncheckedCreateInput>
  }

  /**
   * error_logs createMany
   */
  export type error_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many error_logs.
     */
    data: error_logsCreateManyInput | error_logsCreateManyInput[]
  }

  /**
   * error_logs update
   */
  export type error_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the error_logs
     */
    select?: error_logsSelect<ExtArgs> | null
    /**
     * The data needed to update a error_logs.
     */
    data: XOR<error_logsUpdateInput, error_logsUncheckedUpdateInput>
    /**
     * Choose, which error_logs to update.
     */
    where: error_logsWhereUniqueInput
  }

  /**
   * error_logs updateMany
   */
  export type error_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update error_logs.
     */
    data: XOR<error_logsUpdateManyMutationInput, error_logsUncheckedUpdateManyInput>
    /**
     * Filter which error_logs to update
     */
    where?: error_logsWhereInput
  }

  /**
   * error_logs upsert
   */
  export type error_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the error_logs
     */
    select?: error_logsSelect<ExtArgs> | null
    /**
     * The filter to search for the error_logs to update in case it exists.
     */
    where: error_logsWhereUniqueInput
    /**
     * In case the error_logs found by the `where` argument doesn't exist, create a new error_logs with this data.
     */
    create: XOR<error_logsCreateInput, error_logsUncheckedCreateInput>
    /**
     * In case the error_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<error_logsUpdateInput, error_logsUncheckedUpdateInput>
  }

  /**
   * error_logs delete
   */
  export type error_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the error_logs
     */
    select?: error_logsSelect<ExtArgs> | null
    /**
     * Filter which error_logs to delete.
     */
    where: error_logsWhereUniqueInput
  }

  /**
   * error_logs deleteMany
   */
  export type error_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which error_logs to delete
     */
    where?: error_logsWhereInput
  }

  /**
   * error_logs without action
   */
  export type error_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the error_logs
     */
    select?: error_logsSelect<ExtArgs> | null
  }


  /**
   * Model ms_group_products
   */

  export type AggregateMs_group_products = {
    _count: Ms_group_productsCountAggregateOutputType | null
    _avg: Ms_group_productsAvgAggregateOutputType | null
    _sum: Ms_group_productsSumAggregateOutputType | null
    _min: Ms_group_productsMinAggregateOutputType | null
    _max: Ms_group_productsMaxAggregateOutputType | null
  }

  export type Ms_group_productsAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
    deleted_by: number | null
  }

  export type Ms_group_productsSumAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
    deleted_by: number | null
  }

  export type Ms_group_productsMinAggregateOutputType = {
    id: number | null
    group_product_name: string | null
    group_product_description: string | null
    created_by: number | null
    updated_by: number | null
    deleted_by: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Ms_group_productsMaxAggregateOutputType = {
    id: number | null
    group_product_name: string | null
    group_product_description: string | null
    created_by: number | null
    updated_by: number | null
    deleted_by: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Ms_group_productsCountAggregateOutputType = {
    id: number
    group_product_name: number
    group_product_description: number
    created_by: number
    updated_by: number
    deleted_by: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Ms_group_productsAvgAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
  }

  export type Ms_group_productsSumAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
  }

  export type Ms_group_productsMinAggregateInputType = {
    id?: true
    group_product_name?: true
    group_product_description?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Ms_group_productsMaxAggregateInputType = {
    id?: true
    group_product_name?: true
    group_product_description?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Ms_group_productsCountAggregateInputType = {
    id?: true
    group_product_name?: true
    group_product_description?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Ms_group_productsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ms_group_products to aggregate.
     */
    where?: ms_group_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ms_group_products to fetch.
     */
    orderBy?: ms_group_productsOrderByWithRelationInput | ms_group_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ms_group_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ms_group_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ms_group_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ms_group_products
    **/
    _count?: true | Ms_group_productsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ms_group_productsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ms_group_productsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ms_group_productsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ms_group_productsMaxAggregateInputType
  }

  export type GetMs_group_productsAggregateType<T extends Ms_group_productsAggregateArgs> = {
        [P in keyof T & keyof AggregateMs_group_products]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMs_group_products[P]>
      : GetScalarType<T[P], AggregateMs_group_products[P]>
  }




  export type ms_group_productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ms_group_productsWhereInput
    orderBy?: ms_group_productsOrderByWithAggregationInput | ms_group_productsOrderByWithAggregationInput[]
    by: Ms_group_productsScalarFieldEnum[] | Ms_group_productsScalarFieldEnum
    having?: ms_group_productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ms_group_productsCountAggregateInputType | true
    _avg?: Ms_group_productsAvgAggregateInputType
    _sum?: Ms_group_productsSumAggregateInputType
    _min?: Ms_group_productsMinAggregateInputType
    _max?: Ms_group_productsMaxAggregateInputType
  }

  export type Ms_group_productsGroupByOutputType = {
    id: number
    group_product_name: string | null
    group_product_description: string | null
    created_by: number | null
    updated_by: number | null
    deleted_by: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: Ms_group_productsCountAggregateOutputType | null
    _avg: Ms_group_productsAvgAggregateOutputType | null
    _sum: Ms_group_productsSumAggregateOutputType | null
    _min: Ms_group_productsMinAggregateOutputType | null
    _max: Ms_group_productsMaxAggregateOutputType | null
  }

  type GetMs_group_productsGroupByPayload<T extends ms_group_productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ms_group_productsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ms_group_productsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ms_group_productsGroupByOutputType[P]>
            : GetScalarType<T[P], Ms_group_productsGroupByOutputType[P]>
        }
      >
    >


  export type ms_group_productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_product_name?: boolean
    group_product_description?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["ms_group_products"]>


  export type ms_group_productsSelectScalar = {
    id?: boolean
    group_product_name?: boolean
    group_product_description?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }


  export type $ms_group_productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ms_group_products"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      group_product_name: string | null
      group_product_description: string | null
      created_by: number | null
      updated_by: number | null
      deleted_by: number | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["ms_group_products"]>
    composites: {}
  }

  type ms_group_productsGetPayload<S extends boolean | null | undefined | ms_group_productsDefaultArgs> = $Result.GetResult<Prisma.$ms_group_productsPayload, S>

  type ms_group_productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ms_group_productsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ms_group_productsCountAggregateInputType | true
    }

  export interface ms_group_productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ms_group_products'], meta: { name: 'ms_group_products' } }
    /**
     * Find zero or one Ms_group_products that matches the filter.
     * @param {ms_group_productsFindUniqueArgs} args - Arguments to find a Ms_group_products
     * @example
     * // Get one Ms_group_products
     * const ms_group_products = await prisma.ms_group_products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ms_group_productsFindUniqueArgs>(args: SelectSubset<T, ms_group_productsFindUniqueArgs<ExtArgs>>): Prisma__ms_group_productsClient<$Result.GetResult<Prisma.$ms_group_productsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ms_group_products that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ms_group_productsFindUniqueOrThrowArgs} args - Arguments to find a Ms_group_products
     * @example
     * // Get one Ms_group_products
     * const ms_group_products = await prisma.ms_group_products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ms_group_productsFindUniqueOrThrowArgs>(args: SelectSubset<T, ms_group_productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ms_group_productsClient<$Result.GetResult<Prisma.$ms_group_productsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ms_group_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ms_group_productsFindFirstArgs} args - Arguments to find a Ms_group_products
     * @example
     * // Get one Ms_group_products
     * const ms_group_products = await prisma.ms_group_products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ms_group_productsFindFirstArgs>(args?: SelectSubset<T, ms_group_productsFindFirstArgs<ExtArgs>>): Prisma__ms_group_productsClient<$Result.GetResult<Prisma.$ms_group_productsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ms_group_products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ms_group_productsFindFirstOrThrowArgs} args - Arguments to find a Ms_group_products
     * @example
     * // Get one Ms_group_products
     * const ms_group_products = await prisma.ms_group_products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ms_group_productsFindFirstOrThrowArgs>(args?: SelectSubset<T, ms_group_productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ms_group_productsClient<$Result.GetResult<Prisma.$ms_group_productsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ms_group_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ms_group_productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ms_group_products
     * const ms_group_products = await prisma.ms_group_products.findMany()
     * 
     * // Get first 10 Ms_group_products
     * const ms_group_products = await prisma.ms_group_products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ms_group_productsWithIdOnly = await prisma.ms_group_products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ms_group_productsFindManyArgs>(args?: SelectSubset<T, ms_group_productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ms_group_productsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ms_group_products.
     * @param {ms_group_productsCreateArgs} args - Arguments to create a Ms_group_products.
     * @example
     * // Create one Ms_group_products
     * const Ms_group_products = await prisma.ms_group_products.create({
     *   data: {
     *     // ... data to create a Ms_group_products
     *   }
     * })
     * 
     */
    create<T extends ms_group_productsCreateArgs>(args: SelectSubset<T, ms_group_productsCreateArgs<ExtArgs>>): Prisma__ms_group_productsClient<$Result.GetResult<Prisma.$ms_group_productsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ms_group_products.
     * @param {ms_group_productsCreateManyArgs} args - Arguments to create many Ms_group_products.
     * @example
     * // Create many Ms_group_products
     * const ms_group_products = await prisma.ms_group_products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ms_group_productsCreateManyArgs>(args?: SelectSubset<T, ms_group_productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ms_group_products.
     * @param {ms_group_productsDeleteArgs} args - Arguments to delete one Ms_group_products.
     * @example
     * // Delete one Ms_group_products
     * const Ms_group_products = await prisma.ms_group_products.delete({
     *   where: {
     *     // ... filter to delete one Ms_group_products
     *   }
     * })
     * 
     */
    delete<T extends ms_group_productsDeleteArgs>(args: SelectSubset<T, ms_group_productsDeleteArgs<ExtArgs>>): Prisma__ms_group_productsClient<$Result.GetResult<Prisma.$ms_group_productsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ms_group_products.
     * @param {ms_group_productsUpdateArgs} args - Arguments to update one Ms_group_products.
     * @example
     * // Update one Ms_group_products
     * const ms_group_products = await prisma.ms_group_products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ms_group_productsUpdateArgs>(args: SelectSubset<T, ms_group_productsUpdateArgs<ExtArgs>>): Prisma__ms_group_productsClient<$Result.GetResult<Prisma.$ms_group_productsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ms_group_products.
     * @param {ms_group_productsDeleteManyArgs} args - Arguments to filter Ms_group_products to delete.
     * @example
     * // Delete a few Ms_group_products
     * const { count } = await prisma.ms_group_products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ms_group_productsDeleteManyArgs>(args?: SelectSubset<T, ms_group_productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ms_group_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ms_group_productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ms_group_products
     * const ms_group_products = await prisma.ms_group_products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ms_group_productsUpdateManyArgs>(args: SelectSubset<T, ms_group_productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ms_group_products.
     * @param {ms_group_productsUpsertArgs} args - Arguments to update or create a Ms_group_products.
     * @example
     * // Update or create a Ms_group_products
     * const ms_group_products = await prisma.ms_group_products.upsert({
     *   create: {
     *     // ... data to create a Ms_group_products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ms_group_products we want to update
     *   }
     * })
     */
    upsert<T extends ms_group_productsUpsertArgs>(args: SelectSubset<T, ms_group_productsUpsertArgs<ExtArgs>>): Prisma__ms_group_productsClient<$Result.GetResult<Prisma.$ms_group_productsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ms_group_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ms_group_productsCountArgs} args - Arguments to filter Ms_group_products to count.
     * @example
     * // Count the number of Ms_group_products
     * const count = await prisma.ms_group_products.count({
     *   where: {
     *     // ... the filter for the Ms_group_products we want to count
     *   }
     * })
    **/
    count<T extends ms_group_productsCountArgs>(
      args?: Subset<T, ms_group_productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ms_group_productsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ms_group_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ms_group_productsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ms_group_productsAggregateArgs>(args: Subset<T, Ms_group_productsAggregateArgs>): Prisma.PrismaPromise<GetMs_group_productsAggregateType<T>>

    /**
     * Group by Ms_group_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ms_group_productsGroupByArgs} args - Group by arguments.
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
      T extends ms_group_productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ms_group_productsGroupByArgs['orderBy'] }
        : { orderBy?: ms_group_productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ms_group_productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMs_group_productsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ms_group_products model
   */
  readonly fields: ms_group_productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ms_group_products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ms_group_productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ms_group_products model
   */ 
  interface ms_group_productsFieldRefs {
    readonly id: FieldRef<"ms_group_products", 'Int'>
    readonly group_product_name: FieldRef<"ms_group_products", 'String'>
    readonly group_product_description: FieldRef<"ms_group_products", 'String'>
    readonly created_by: FieldRef<"ms_group_products", 'Int'>
    readonly updated_by: FieldRef<"ms_group_products", 'Int'>
    readonly deleted_by: FieldRef<"ms_group_products", 'Int'>
    readonly created_at: FieldRef<"ms_group_products", 'DateTime'>
    readonly updated_at: FieldRef<"ms_group_products", 'DateTime'>
    readonly deleted_at: FieldRef<"ms_group_products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ms_group_products findUnique
   */
  export type ms_group_productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ms_group_products
     */
    select?: ms_group_productsSelect<ExtArgs> | null
    /**
     * Filter, which ms_group_products to fetch.
     */
    where: ms_group_productsWhereUniqueInput
  }

  /**
   * ms_group_products findUniqueOrThrow
   */
  export type ms_group_productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ms_group_products
     */
    select?: ms_group_productsSelect<ExtArgs> | null
    /**
     * Filter, which ms_group_products to fetch.
     */
    where: ms_group_productsWhereUniqueInput
  }

  /**
   * ms_group_products findFirst
   */
  export type ms_group_productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ms_group_products
     */
    select?: ms_group_productsSelect<ExtArgs> | null
    /**
     * Filter, which ms_group_products to fetch.
     */
    where?: ms_group_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ms_group_products to fetch.
     */
    orderBy?: ms_group_productsOrderByWithRelationInput | ms_group_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ms_group_products.
     */
    cursor?: ms_group_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ms_group_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ms_group_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ms_group_products.
     */
    distinct?: Ms_group_productsScalarFieldEnum | Ms_group_productsScalarFieldEnum[]
  }

  /**
   * ms_group_products findFirstOrThrow
   */
  export type ms_group_productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ms_group_products
     */
    select?: ms_group_productsSelect<ExtArgs> | null
    /**
     * Filter, which ms_group_products to fetch.
     */
    where?: ms_group_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ms_group_products to fetch.
     */
    orderBy?: ms_group_productsOrderByWithRelationInput | ms_group_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ms_group_products.
     */
    cursor?: ms_group_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ms_group_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ms_group_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ms_group_products.
     */
    distinct?: Ms_group_productsScalarFieldEnum | Ms_group_productsScalarFieldEnum[]
  }

  /**
   * ms_group_products findMany
   */
  export type ms_group_productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ms_group_products
     */
    select?: ms_group_productsSelect<ExtArgs> | null
    /**
     * Filter, which ms_group_products to fetch.
     */
    where?: ms_group_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ms_group_products to fetch.
     */
    orderBy?: ms_group_productsOrderByWithRelationInput | ms_group_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ms_group_products.
     */
    cursor?: ms_group_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ms_group_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ms_group_products.
     */
    skip?: number
    distinct?: Ms_group_productsScalarFieldEnum | Ms_group_productsScalarFieldEnum[]
  }

  /**
   * ms_group_products create
   */
  export type ms_group_productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ms_group_products
     */
    select?: ms_group_productsSelect<ExtArgs> | null
    /**
     * The data needed to create a ms_group_products.
     */
    data?: XOR<ms_group_productsCreateInput, ms_group_productsUncheckedCreateInput>
  }

  /**
   * ms_group_products createMany
   */
  export type ms_group_productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ms_group_products.
     */
    data: ms_group_productsCreateManyInput | ms_group_productsCreateManyInput[]
  }

  /**
   * ms_group_products update
   */
  export type ms_group_productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ms_group_products
     */
    select?: ms_group_productsSelect<ExtArgs> | null
    /**
     * The data needed to update a ms_group_products.
     */
    data: XOR<ms_group_productsUpdateInput, ms_group_productsUncheckedUpdateInput>
    /**
     * Choose, which ms_group_products to update.
     */
    where: ms_group_productsWhereUniqueInput
  }

  /**
   * ms_group_products updateMany
   */
  export type ms_group_productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ms_group_products.
     */
    data: XOR<ms_group_productsUpdateManyMutationInput, ms_group_productsUncheckedUpdateManyInput>
    /**
     * Filter which ms_group_products to update
     */
    where?: ms_group_productsWhereInput
  }

  /**
   * ms_group_products upsert
   */
  export type ms_group_productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ms_group_products
     */
    select?: ms_group_productsSelect<ExtArgs> | null
    /**
     * The filter to search for the ms_group_products to update in case it exists.
     */
    where: ms_group_productsWhereUniqueInput
    /**
     * In case the ms_group_products found by the `where` argument doesn't exist, create a new ms_group_products with this data.
     */
    create: XOR<ms_group_productsCreateInput, ms_group_productsUncheckedCreateInput>
    /**
     * In case the ms_group_products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ms_group_productsUpdateInput, ms_group_productsUncheckedUpdateInput>
  }

  /**
   * ms_group_products delete
   */
  export type ms_group_productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ms_group_products
     */
    select?: ms_group_productsSelect<ExtArgs> | null
    /**
     * Filter which ms_group_products to delete.
     */
    where: ms_group_productsWhereUniqueInput
  }

  /**
   * ms_group_products deleteMany
   */
  export type ms_group_productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ms_group_products to delete
     */
    where?: ms_group_productsWhereInput
  }

  /**
   * ms_group_products without action
   */
  export type ms_group_productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ms_group_products
     */
    select?: ms_group_productsSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Activity_logsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    action: 'action',
    description: 'description',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    created_at: 'created_at'
  };

  export type Activity_logsScalarFieldEnum = (typeof Activity_logsScalarFieldEnum)[keyof typeof Activity_logsScalarFieldEnum]


  export const Error_logsScalarFieldEnum: {
    id: 'id',
    message: 'message',
    stack_trace: 'stack_trace',
    code: 'code',
    method: 'method',
    url: 'url',
    params: 'params',
    query: 'query',
    body: 'body',
    headers: 'headers',
    user_id: 'user_id',
    ip_address: 'ip_address',
    created_at: 'created_at'
  };

  export type Error_logsScalarFieldEnum = (typeof Error_logsScalarFieldEnum)[keyof typeof Error_logsScalarFieldEnum]


  export const Ms_group_productsScalarFieldEnum: {
    id: 'id',
    group_product_name: 'group_product_name',
    group_product_description: 'group_product_description',
    created_by: 'created_by',
    updated_by: 'updated_by',
    deleted_by: 'deleted_by',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Ms_group_productsScalarFieldEnum = (typeof Ms_group_productsScalarFieldEnum)[keyof typeof Ms_group_productsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type activity_logsWhereInput = {
    AND?: activity_logsWhereInput | activity_logsWhereInput[]
    OR?: activity_logsWhereInput[]
    NOT?: activity_logsWhereInput | activity_logsWhereInput[]
    id?: IntFilter<"activity_logs"> | number
    user_id?: IntNullableFilter<"activity_logs"> | number | null
    action?: StringNullableFilter<"activity_logs"> | string | null
    description?: StringNullableFilter<"activity_logs"> | string | null
    ip_address?: StringNullableFilter<"activity_logs"> | string | null
    user_agent?: StringNullableFilter<"activity_logs"> | string | null
    created_at?: DateTimeNullableFilter<"activity_logs"> | Date | string | null
  }

  export type activity_logsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type activity_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: activity_logsWhereInput | activity_logsWhereInput[]
    OR?: activity_logsWhereInput[]
    NOT?: activity_logsWhereInput | activity_logsWhereInput[]
    user_id?: IntNullableFilter<"activity_logs"> | number | null
    action?: StringNullableFilter<"activity_logs"> | string | null
    description?: StringNullableFilter<"activity_logs"> | string | null
    ip_address?: StringNullableFilter<"activity_logs"> | string | null
    user_agent?: StringNullableFilter<"activity_logs"> | string | null
    created_at?: DateTimeNullableFilter<"activity_logs"> | Date | string | null
  }, "id">

  export type activity_logsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: activity_logsCountOrderByAggregateInput
    _avg?: activity_logsAvgOrderByAggregateInput
    _max?: activity_logsMaxOrderByAggregateInput
    _min?: activity_logsMinOrderByAggregateInput
    _sum?: activity_logsSumOrderByAggregateInput
  }

  export type activity_logsScalarWhereWithAggregatesInput = {
    AND?: activity_logsScalarWhereWithAggregatesInput | activity_logsScalarWhereWithAggregatesInput[]
    OR?: activity_logsScalarWhereWithAggregatesInput[]
    NOT?: activity_logsScalarWhereWithAggregatesInput | activity_logsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"activity_logs"> | number
    user_id?: IntNullableWithAggregatesFilter<"activity_logs"> | number | null
    action?: StringNullableWithAggregatesFilter<"activity_logs"> | string | null
    description?: StringNullableWithAggregatesFilter<"activity_logs"> | string | null
    ip_address?: StringNullableWithAggregatesFilter<"activity_logs"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"activity_logs"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"activity_logs"> | Date | string | null
  }

  export type error_logsWhereInput = {
    AND?: error_logsWhereInput | error_logsWhereInput[]
    OR?: error_logsWhereInput[]
    NOT?: error_logsWhereInput | error_logsWhereInput[]
    id?: IntFilter<"error_logs"> | number
    message?: StringNullableFilter<"error_logs"> | string | null
    stack_trace?: StringNullableFilter<"error_logs"> | string | null
    code?: StringNullableFilter<"error_logs"> | string | null
    method?: StringNullableFilter<"error_logs"> | string | null
    url?: StringNullableFilter<"error_logs"> | string | null
    params?: StringNullableFilter<"error_logs"> | string | null
    query?: StringNullableFilter<"error_logs"> | string | null
    body?: StringNullableFilter<"error_logs"> | string | null
    headers?: StringNullableFilter<"error_logs"> | string | null
    user_id?: IntNullableFilter<"error_logs"> | number | null
    ip_address?: StringNullableFilter<"error_logs"> | string | null
    created_at?: DateTimeNullableFilter<"error_logs"> | Date | string | null
  }

  export type error_logsOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrderInput | SortOrder
    stack_trace?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    method?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    params?: SortOrderInput | SortOrder
    query?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    headers?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type error_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: error_logsWhereInput | error_logsWhereInput[]
    OR?: error_logsWhereInput[]
    NOT?: error_logsWhereInput | error_logsWhereInput[]
    message?: StringNullableFilter<"error_logs"> | string | null
    stack_trace?: StringNullableFilter<"error_logs"> | string | null
    code?: StringNullableFilter<"error_logs"> | string | null
    method?: StringNullableFilter<"error_logs"> | string | null
    url?: StringNullableFilter<"error_logs"> | string | null
    params?: StringNullableFilter<"error_logs"> | string | null
    query?: StringNullableFilter<"error_logs"> | string | null
    body?: StringNullableFilter<"error_logs"> | string | null
    headers?: StringNullableFilter<"error_logs"> | string | null
    user_id?: IntNullableFilter<"error_logs"> | number | null
    ip_address?: StringNullableFilter<"error_logs"> | string | null
    created_at?: DateTimeNullableFilter<"error_logs"> | Date | string | null
  }, "id">

  export type error_logsOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrderInput | SortOrder
    stack_trace?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    method?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    params?: SortOrderInput | SortOrder
    query?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    headers?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: error_logsCountOrderByAggregateInput
    _avg?: error_logsAvgOrderByAggregateInput
    _max?: error_logsMaxOrderByAggregateInput
    _min?: error_logsMinOrderByAggregateInput
    _sum?: error_logsSumOrderByAggregateInput
  }

  export type error_logsScalarWhereWithAggregatesInput = {
    AND?: error_logsScalarWhereWithAggregatesInput | error_logsScalarWhereWithAggregatesInput[]
    OR?: error_logsScalarWhereWithAggregatesInput[]
    NOT?: error_logsScalarWhereWithAggregatesInput | error_logsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"error_logs"> | number
    message?: StringNullableWithAggregatesFilter<"error_logs"> | string | null
    stack_trace?: StringNullableWithAggregatesFilter<"error_logs"> | string | null
    code?: StringNullableWithAggregatesFilter<"error_logs"> | string | null
    method?: StringNullableWithAggregatesFilter<"error_logs"> | string | null
    url?: StringNullableWithAggregatesFilter<"error_logs"> | string | null
    params?: StringNullableWithAggregatesFilter<"error_logs"> | string | null
    query?: StringNullableWithAggregatesFilter<"error_logs"> | string | null
    body?: StringNullableWithAggregatesFilter<"error_logs"> | string | null
    headers?: StringNullableWithAggregatesFilter<"error_logs"> | string | null
    user_id?: IntNullableWithAggregatesFilter<"error_logs"> | number | null
    ip_address?: StringNullableWithAggregatesFilter<"error_logs"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"error_logs"> | Date | string | null
  }

  export type ms_group_productsWhereInput = {
    AND?: ms_group_productsWhereInput | ms_group_productsWhereInput[]
    OR?: ms_group_productsWhereInput[]
    NOT?: ms_group_productsWhereInput | ms_group_productsWhereInput[]
    id?: IntFilter<"ms_group_products"> | number
    group_product_name?: StringNullableFilter<"ms_group_products"> | string | null
    group_product_description?: StringNullableFilter<"ms_group_products"> | string | null
    created_by?: IntNullableFilter<"ms_group_products"> | number | null
    updated_by?: IntNullableFilter<"ms_group_products"> | number | null
    deleted_by?: IntNullableFilter<"ms_group_products"> | number | null
    created_at?: DateTimeNullableFilter<"ms_group_products"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ms_group_products"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"ms_group_products"> | Date | string | null
  }

  export type ms_group_productsOrderByWithRelationInput = {
    id?: SortOrder
    group_product_name?: SortOrderInput | SortOrder
    group_product_description?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_by?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
  }

  export type ms_group_productsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ms_group_productsWhereInput | ms_group_productsWhereInput[]
    OR?: ms_group_productsWhereInput[]
    NOT?: ms_group_productsWhereInput | ms_group_productsWhereInput[]
    group_product_name?: StringNullableFilter<"ms_group_products"> | string | null
    group_product_description?: StringNullableFilter<"ms_group_products"> | string | null
    created_by?: IntNullableFilter<"ms_group_products"> | number | null
    updated_by?: IntNullableFilter<"ms_group_products"> | number | null
    deleted_by?: IntNullableFilter<"ms_group_products"> | number | null
    created_at?: DateTimeNullableFilter<"ms_group_products"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ms_group_products"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"ms_group_products"> | Date | string | null
  }, "id">

  export type ms_group_productsOrderByWithAggregationInput = {
    id?: SortOrder
    group_product_name?: SortOrderInput | SortOrder
    group_product_description?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_by?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: ms_group_productsCountOrderByAggregateInput
    _avg?: ms_group_productsAvgOrderByAggregateInput
    _max?: ms_group_productsMaxOrderByAggregateInput
    _min?: ms_group_productsMinOrderByAggregateInput
    _sum?: ms_group_productsSumOrderByAggregateInput
  }

  export type ms_group_productsScalarWhereWithAggregatesInput = {
    AND?: ms_group_productsScalarWhereWithAggregatesInput | ms_group_productsScalarWhereWithAggregatesInput[]
    OR?: ms_group_productsScalarWhereWithAggregatesInput[]
    NOT?: ms_group_productsScalarWhereWithAggregatesInput | ms_group_productsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ms_group_products"> | number
    group_product_name?: StringNullableWithAggregatesFilter<"ms_group_products"> | string | null
    group_product_description?: StringNullableWithAggregatesFilter<"ms_group_products"> | string | null
    created_by?: IntNullableWithAggregatesFilter<"ms_group_products"> | number | null
    updated_by?: IntNullableWithAggregatesFilter<"ms_group_products"> | number | null
    deleted_by?: IntNullableWithAggregatesFilter<"ms_group_products"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"ms_group_products"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"ms_group_products"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"ms_group_products"> | Date | string | null
  }

  export type activity_logsCreateInput = {
    user_id?: number | null
    action?: string | null
    description?: string | null
    ip_address?: string | null
    user_agent?: string | null
    created_at?: Date | string | null
  }

  export type activity_logsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    action?: string | null
    description?: string | null
    ip_address?: string | null
    user_agent?: string | null
    created_at?: Date | string | null
  }

  export type activity_logsUpdateInput = {
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type activity_logsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type activity_logsCreateManyInput = {
    user_id?: number | null
    action?: string | null
    description?: string | null
    ip_address?: string | null
    user_agent?: string | null
    created_at?: Date | string | null
  }

  export type activity_logsUpdateManyMutationInput = {
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type activity_logsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type error_logsCreateInput = {
    message?: string | null
    stack_trace?: string | null
    code?: string | null
    method?: string | null
    url?: string | null
    params?: string | null
    query?: string | null
    body?: string | null
    headers?: string | null
    user_id?: number | null
    ip_address?: string | null
    created_at?: Date | string | null
  }

  export type error_logsUncheckedCreateInput = {
    id?: number
    message?: string | null
    stack_trace?: string | null
    code?: string | null
    method?: string | null
    url?: string | null
    params?: string | null
    query?: string | null
    body?: string | null
    headers?: string | null
    user_id?: number | null
    ip_address?: string | null
    created_at?: Date | string | null
  }

  export type error_logsUpdateInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    stack_trace?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    params?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    headers?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type error_logsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    stack_trace?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    params?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    headers?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type error_logsCreateManyInput = {
    message?: string | null
    stack_trace?: string | null
    code?: string | null
    method?: string | null
    url?: string | null
    params?: string | null
    query?: string | null
    body?: string | null
    headers?: string | null
    user_id?: number | null
    ip_address?: string | null
    created_at?: Date | string | null
  }

  export type error_logsUpdateManyMutationInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    stack_trace?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    params?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    headers?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type error_logsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    stack_trace?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    params?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    headers?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ms_group_productsCreateInput = {
    group_product_name?: string | null
    group_product_description?: string | null
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ms_group_productsUncheckedCreateInput = {
    id?: number
    group_product_name?: string | null
    group_product_description?: string | null
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ms_group_productsUpdateInput = {
    group_product_name?: NullableStringFieldUpdateOperationsInput | string | null
    group_product_description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ms_group_productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    group_product_name?: NullableStringFieldUpdateOperationsInput | string | null
    group_product_description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ms_group_productsCreateManyInput = {
    group_product_name?: string | null
    group_product_description?: string | null
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ms_group_productsUpdateManyMutationInput = {
    group_product_name?: NullableStringFieldUpdateOperationsInput | string | null
    group_product_description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ms_group_productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    group_product_name?: NullableStringFieldUpdateOperationsInput | string | null
    group_product_description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type activity_logsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    created_at?: SortOrder
  }

  export type activity_logsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type activity_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    created_at?: SortOrder
  }

  export type activity_logsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    created_at?: SortOrder
  }

  export type activity_logsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type error_logsCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    stack_trace?: SortOrder
    code?: SortOrder
    method?: SortOrder
    url?: SortOrder
    params?: SortOrder
    query?: SortOrder
    body?: SortOrder
    headers?: SortOrder
    user_id?: SortOrder
    ip_address?: SortOrder
    created_at?: SortOrder
  }

  export type error_logsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type error_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    stack_trace?: SortOrder
    code?: SortOrder
    method?: SortOrder
    url?: SortOrder
    params?: SortOrder
    query?: SortOrder
    body?: SortOrder
    headers?: SortOrder
    user_id?: SortOrder
    ip_address?: SortOrder
    created_at?: SortOrder
  }

  export type error_logsMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    stack_trace?: SortOrder
    code?: SortOrder
    method?: SortOrder
    url?: SortOrder
    params?: SortOrder
    query?: SortOrder
    body?: SortOrder
    headers?: SortOrder
    user_id?: SortOrder
    ip_address?: SortOrder
    created_at?: SortOrder
  }

  export type error_logsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type ms_group_productsCountOrderByAggregateInput = {
    id?: SortOrder
    group_product_name?: SortOrder
    group_product_description?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ms_group_productsAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
  }

  export type ms_group_productsMaxOrderByAggregateInput = {
    id?: SortOrder
    group_product_name?: SortOrder
    group_product_description?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ms_group_productsMinOrderByAggregateInput = {
    id?: SortOrder
    group_product_name?: SortOrder
    group_product_description?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ms_group_productsSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use activity_logsDefaultArgs instead
     */
    export type activity_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = activity_logsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use error_logsDefaultArgs instead
     */
    export type error_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = error_logsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ms_group_productsDefaultArgs instead
     */
    export type ms_group_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ms_group_productsDefaultArgs<ExtArgs>

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