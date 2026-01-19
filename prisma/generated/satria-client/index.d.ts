
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model apps_menu
 * 
 */
export type apps_menu = $Result.DefaultSelection<Prisma.$apps_menuPayload>
/**
 * Model permission_group_menu
 * 
 */
export type permission_group_menu = $Result.DefaultSelection<Prisma.$permission_group_menuPayload>
/**
 * Model role_group
 * 
 */
export type role_group = $Result.DefaultSelection<Prisma.$role_groupPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.apps_menu`: Exposes CRUD operations for the **apps_menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apps_menus
    * const apps_menus = await prisma.apps_menu.findMany()
    * ```
    */
  get apps_menu(): Prisma.apps_menuDelegate<ExtArgs>;

  /**
   * `prisma.permission_group_menu`: Exposes CRUD operations for the **permission_group_menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permission_group_menus
    * const permission_group_menus = await prisma.permission_group_menu.findMany()
    * ```
    */
  get permission_group_menu(): Prisma.permission_group_menuDelegate<ExtArgs>;

  /**
   * `prisma.role_group`: Exposes CRUD operations for the **role_group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Role_groups
    * const role_groups = await prisma.role_group.findMany()
    * ```
    */
  get role_group(): Prisma.role_groupDelegate<ExtArgs>;
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
    User: 'User',
    apps_menu: 'apps_menu',
    permission_group_menu: 'permission_group_menu',
    role_group: 'role_group'
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
      modelProps: "user" | "apps_menu" | "permission_group_menu" | "role_group"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      apps_menu: {
        payload: Prisma.$apps_menuPayload<ExtArgs>
        fields: Prisma.apps_menuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.apps_menuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apps_menuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.apps_menuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apps_menuPayload>
          }
          findFirst: {
            args: Prisma.apps_menuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apps_menuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.apps_menuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apps_menuPayload>
          }
          findMany: {
            args: Prisma.apps_menuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apps_menuPayload>[]
          }
          create: {
            args: Prisma.apps_menuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apps_menuPayload>
          }
          createMany: {
            args: Prisma.apps_menuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.apps_menuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apps_menuPayload>
          }
          update: {
            args: Prisma.apps_menuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apps_menuPayload>
          }
          deleteMany: {
            args: Prisma.apps_menuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.apps_menuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.apps_menuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apps_menuPayload>
          }
          aggregate: {
            args: Prisma.Apps_menuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApps_menu>
          }
          groupBy: {
            args: Prisma.apps_menuGroupByArgs<ExtArgs>
            result: $Utils.Optional<Apps_menuGroupByOutputType>[]
          }
          count: {
            args: Prisma.apps_menuCountArgs<ExtArgs>
            result: $Utils.Optional<Apps_menuCountAggregateOutputType> | number
          }
        }
      }
      permission_group_menu: {
        payload: Prisma.$permission_group_menuPayload<ExtArgs>
        fields: Prisma.permission_group_menuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.permission_group_menuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permission_group_menuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.permission_group_menuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permission_group_menuPayload>
          }
          findFirst: {
            args: Prisma.permission_group_menuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permission_group_menuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.permission_group_menuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permission_group_menuPayload>
          }
          findMany: {
            args: Prisma.permission_group_menuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permission_group_menuPayload>[]
          }
          create: {
            args: Prisma.permission_group_menuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permission_group_menuPayload>
          }
          createMany: {
            args: Prisma.permission_group_menuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.permission_group_menuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permission_group_menuPayload>
          }
          update: {
            args: Prisma.permission_group_menuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permission_group_menuPayload>
          }
          deleteMany: {
            args: Prisma.permission_group_menuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.permission_group_menuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.permission_group_menuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permission_group_menuPayload>
          }
          aggregate: {
            args: Prisma.Permission_group_menuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission_group_menu>
          }
          groupBy: {
            args: Prisma.permission_group_menuGroupByArgs<ExtArgs>
            result: $Utils.Optional<Permission_group_menuGroupByOutputType>[]
          }
          count: {
            args: Prisma.permission_group_menuCountArgs<ExtArgs>
            result: $Utils.Optional<Permission_group_menuCountAggregateOutputType> | number
          }
        }
      }
      role_group: {
        payload: Prisma.$role_groupPayload<ExtArgs>
        fields: Prisma.role_groupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.role_groupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_groupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.role_groupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_groupPayload>
          }
          findFirst: {
            args: Prisma.role_groupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_groupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.role_groupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_groupPayload>
          }
          findMany: {
            args: Prisma.role_groupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_groupPayload>[]
          }
          create: {
            args: Prisma.role_groupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_groupPayload>
          }
          createMany: {
            args: Prisma.role_groupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.role_groupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_groupPayload>
          }
          update: {
            args: Prisma.role_groupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_groupPayload>
          }
          deleteMany: {
            args: Prisma.role_groupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.role_groupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.role_groupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_groupPayload>
          }
          aggregate: {
            args: Prisma.Role_groupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole_group>
          }
          groupBy: {
            args: Prisma.role_groupGroupByArgs<ExtArgs>
            result: $Utils.Optional<Role_groupGroupByOutputType>[]
          }
          count: {
            args: Prisma.role_groupCountArgs<ExtArgs>
            result: $Utils.Optional<Role_groupCountAggregateOutputType> | number
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
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    is_active: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    is_active: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    email_sf: string | null
    personal_number: string | null
    department: string | null
    division: string | null
    company_name: string | null
    is_active: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    email_sf: string | null
    personal_number: string | null
    department: string | null
    division: string | null
    company_name: string | null
    is_active: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    email_sf: number
    personal_number: number
    department: number
    division: number
    company_name: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    is_active?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    is_active?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    email_sf?: true
    personal_number?: true
    department?: true
    division?: true
    company_name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    email_sf?: true
    personal_number?: true
    department?: true
    division?: true
    company_name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    email_sf?: true
    personal_number?: true
    department?: true
    division?: true
    company_name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    email_sf: string
    personal_number: string
    department: string
    division: string
    company_name: string
    is_active: number
    created_at: Date
    updated_at: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    email_sf?: boolean
    personal_number?: boolean
    department?: boolean
    division?: boolean
    company_name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    email_sf?: boolean
    personal_number?: boolean
    department?: boolean
    division?: boolean
    company_name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      email_sf: string
      personal_number: string
      department: string
      division: string
      company_name: string
      is_active: number
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email_sf: FieldRef<"User", 'String'>
    readonly personal_number: FieldRef<"User", 'String'>
    readonly department: FieldRef<"User", 'String'>
    readonly division: FieldRef<"User", 'String'>
    readonly company_name: FieldRef<"User", 'String'>
    readonly is_active: FieldRef<"User", 'Int'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model apps_menu
   */

  export type AggregateApps_menu = {
    _count: Apps_menuCountAggregateOutputType | null
    _avg: Apps_menuAvgAggregateOutputType | null
    _sum: Apps_menuSumAggregateOutputType | null
    _min: Apps_menuMinAggregateOutputType | null
    _max: Apps_menuMaxAggregateOutputType | null
  }

  export type Apps_menuAvgAggregateOutputType = {
    id: number | null
    flag: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type Apps_menuSumAggregateOutputType = {
    id: number | null
    flag: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type Apps_menuMinAggregateOutputType = {
    id: number | null
    topmain: string | null
    main: string | null
    menu: string | null
    link: string | null
    icon: string | null
    flag: number | null
    created_by: number | null
    created_at: Date | null
    updated_by: number | null
    updated_at: Date | null
  }

  export type Apps_menuMaxAggregateOutputType = {
    id: number | null
    topmain: string | null
    main: string | null
    menu: string | null
    link: string | null
    icon: string | null
    flag: number | null
    created_by: number | null
    created_at: Date | null
    updated_by: number | null
    updated_at: Date | null
  }

  export type Apps_menuCountAggregateOutputType = {
    id: number
    topmain: number
    main: number
    menu: number
    link: number
    icon: number
    flag: number
    created_by: number
    created_at: number
    updated_by: number
    updated_at: number
    _all: number
  }


  export type Apps_menuAvgAggregateInputType = {
    id?: true
    flag?: true
    created_by?: true
    updated_by?: true
  }

  export type Apps_menuSumAggregateInputType = {
    id?: true
    flag?: true
    created_by?: true
    updated_by?: true
  }

  export type Apps_menuMinAggregateInputType = {
    id?: true
    topmain?: true
    main?: true
    menu?: true
    link?: true
    icon?: true
    flag?: true
    created_by?: true
    created_at?: true
    updated_by?: true
    updated_at?: true
  }

  export type Apps_menuMaxAggregateInputType = {
    id?: true
    topmain?: true
    main?: true
    menu?: true
    link?: true
    icon?: true
    flag?: true
    created_by?: true
    created_at?: true
    updated_by?: true
    updated_at?: true
  }

  export type Apps_menuCountAggregateInputType = {
    id?: true
    topmain?: true
    main?: true
    menu?: true
    link?: true
    icon?: true
    flag?: true
    created_by?: true
    created_at?: true
    updated_by?: true
    updated_at?: true
    _all?: true
  }

  export type Apps_menuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apps_menu to aggregate.
     */
    where?: apps_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apps_menus to fetch.
     */
    orderBy?: apps_menuOrderByWithRelationInput | apps_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: apps_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apps_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apps_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned apps_menus
    **/
    _count?: true | Apps_menuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Apps_menuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Apps_menuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Apps_menuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Apps_menuMaxAggregateInputType
  }

  export type GetApps_menuAggregateType<T extends Apps_menuAggregateArgs> = {
        [P in keyof T & keyof AggregateApps_menu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApps_menu[P]>
      : GetScalarType<T[P], AggregateApps_menu[P]>
  }




  export type apps_menuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: apps_menuWhereInput
    orderBy?: apps_menuOrderByWithAggregationInput | apps_menuOrderByWithAggregationInput[]
    by: Apps_menuScalarFieldEnum[] | Apps_menuScalarFieldEnum
    having?: apps_menuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Apps_menuCountAggregateInputType | true
    _avg?: Apps_menuAvgAggregateInputType
    _sum?: Apps_menuSumAggregateInputType
    _min?: Apps_menuMinAggregateInputType
    _max?: Apps_menuMaxAggregateInputType
  }

  export type Apps_menuGroupByOutputType = {
    id: number
    topmain: string | null
    main: string | null
    menu: string
    link: string
    icon: string
    flag: number
    created_by: number
    created_at: Date
    updated_by: number | null
    updated_at: Date | null
    _count: Apps_menuCountAggregateOutputType | null
    _avg: Apps_menuAvgAggregateOutputType | null
    _sum: Apps_menuSumAggregateOutputType | null
    _min: Apps_menuMinAggregateOutputType | null
    _max: Apps_menuMaxAggregateOutputType | null
  }

  type GetApps_menuGroupByPayload<T extends apps_menuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Apps_menuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Apps_menuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Apps_menuGroupByOutputType[P]>
            : GetScalarType<T[P], Apps_menuGroupByOutputType[P]>
        }
      >
    >


  export type apps_menuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topmain?: boolean
    main?: boolean
    menu?: boolean
    link?: boolean
    icon?: boolean
    flag?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_by?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["apps_menu"]>


  export type apps_menuSelectScalar = {
    id?: boolean
    topmain?: boolean
    main?: boolean
    menu?: boolean
    link?: boolean
    icon?: boolean
    flag?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_by?: boolean
    updated_at?: boolean
  }


  export type $apps_menuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "apps_menu"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      topmain: string | null
      main: string | null
      menu: string
      link: string
      icon: string
      flag: number
      created_by: number
      created_at: Date
      updated_by: number | null
      updated_at: Date | null
    }, ExtArgs["result"]["apps_menu"]>
    composites: {}
  }

  type apps_menuGetPayload<S extends boolean | null | undefined | apps_menuDefaultArgs> = $Result.GetResult<Prisma.$apps_menuPayload, S>

  type apps_menuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<apps_menuFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Apps_menuCountAggregateInputType | true
    }

  export interface apps_menuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['apps_menu'], meta: { name: 'apps_menu' } }
    /**
     * Find zero or one Apps_menu that matches the filter.
     * @param {apps_menuFindUniqueArgs} args - Arguments to find a Apps_menu
     * @example
     * // Get one Apps_menu
     * const apps_menu = await prisma.apps_menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends apps_menuFindUniqueArgs>(args: SelectSubset<T, apps_menuFindUniqueArgs<ExtArgs>>): Prisma__apps_menuClient<$Result.GetResult<Prisma.$apps_menuPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Apps_menu that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {apps_menuFindUniqueOrThrowArgs} args - Arguments to find a Apps_menu
     * @example
     * // Get one Apps_menu
     * const apps_menu = await prisma.apps_menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends apps_menuFindUniqueOrThrowArgs>(args: SelectSubset<T, apps_menuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__apps_menuClient<$Result.GetResult<Prisma.$apps_menuPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Apps_menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apps_menuFindFirstArgs} args - Arguments to find a Apps_menu
     * @example
     * // Get one Apps_menu
     * const apps_menu = await prisma.apps_menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends apps_menuFindFirstArgs>(args?: SelectSubset<T, apps_menuFindFirstArgs<ExtArgs>>): Prisma__apps_menuClient<$Result.GetResult<Prisma.$apps_menuPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Apps_menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apps_menuFindFirstOrThrowArgs} args - Arguments to find a Apps_menu
     * @example
     * // Get one Apps_menu
     * const apps_menu = await prisma.apps_menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends apps_menuFindFirstOrThrowArgs>(args?: SelectSubset<T, apps_menuFindFirstOrThrowArgs<ExtArgs>>): Prisma__apps_menuClient<$Result.GetResult<Prisma.$apps_menuPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Apps_menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apps_menuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apps_menus
     * const apps_menus = await prisma.apps_menu.findMany()
     * 
     * // Get first 10 Apps_menus
     * const apps_menus = await prisma.apps_menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apps_menuWithIdOnly = await prisma.apps_menu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends apps_menuFindManyArgs>(args?: SelectSubset<T, apps_menuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apps_menuPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Apps_menu.
     * @param {apps_menuCreateArgs} args - Arguments to create a Apps_menu.
     * @example
     * // Create one Apps_menu
     * const Apps_menu = await prisma.apps_menu.create({
     *   data: {
     *     // ... data to create a Apps_menu
     *   }
     * })
     * 
     */
    create<T extends apps_menuCreateArgs>(args: SelectSubset<T, apps_menuCreateArgs<ExtArgs>>): Prisma__apps_menuClient<$Result.GetResult<Prisma.$apps_menuPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Apps_menus.
     * @param {apps_menuCreateManyArgs} args - Arguments to create many Apps_menus.
     * @example
     * // Create many Apps_menus
     * const apps_menu = await prisma.apps_menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends apps_menuCreateManyArgs>(args?: SelectSubset<T, apps_menuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Apps_menu.
     * @param {apps_menuDeleteArgs} args - Arguments to delete one Apps_menu.
     * @example
     * // Delete one Apps_menu
     * const Apps_menu = await prisma.apps_menu.delete({
     *   where: {
     *     // ... filter to delete one Apps_menu
     *   }
     * })
     * 
     */
    delete<T extends apps_menuDeleteArgs>(args: SelectSubset<T, apps_menuDeleteArgs<ExtArgs>>): Prisma__apps_menuClient<$Result.GetResult<Prisma.$apps_menuPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Apps_menu.
     * @param {apps_menuUpdateArgs} args - Arguments to update one Apps_menu.
     * @example
     * // Update one Apps_menu
     * const apps_menu = await prisma.apps_menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends apps_menuUpdateArgs>(args: SelectSubset<T, apps_menuUpdateArgs<ExtArgs>>): Prisma__apps_menuClient<$Result.GetResult<Prisma.$apps_menuPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Apps_menus.
     * @param {apps_menuDeleteManyArgs} args - Arguments to filter Apps_menus to delete.
     * @example
     * // Delete a few Apps_menus
     * const { count } = await prisma.apps_menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends apps_menuDeleteManyArgs>(args?: SelectSubset<T, apps_menuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apps_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apps_menuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apps_menus
     * const apps_menu = await prisma.apps_menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends apps_menuUpdateManyArgs>(args: SelectSubset<T, apps_menuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Apps_menu.
     * @param {apps_menuUpsertArgs} args - Arguments to update or create a Apps_menu.
     * @example
     * // Update or create a Apps_menu
     * const apps_menu = await prisma.apps_menu.upsert({
     *   create: {
     *     // ... data to create a Apps_menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apps_menu we want to update
     *   }
     * })
     */
    upsert<T extends apps_menuUpsertArgs>(args: SelectSubset<T, apps_menuUpsertArgs<ExtArgs>>): Prisma__apps_menuClient<$Result.GetResult<Prisma.$apps_menuPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Apps_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apps_menuCountArgs} args - Arguments to filter Apps_menus to count.
     * @example
     * // Count the number of Apps_menus
     * const count = await prisma.apps_menu.count({
     *   where: {
     *     // ... the filter for the Apps_menus we want to count
     *   }
     * })
    **/
    count<T extends apps_menuCountArgs>(
      args?: Subset<T, apps_menuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Apps_menuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apps_menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Apps_menuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Apps_menuAggregateArgs>(args: Subset<T, Apps_menuAggregateArgs>): Prisma.PrismaPromise<GetApps_menuAggregateType<T>>

    /**
     * Group by Apps_menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apps_menuGroupByArgs} args - Group by arguments.
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
      T extends apps_menuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: apps_menuGroupByArgs['orderBy'] }
        : { orderBy?: apps_menuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, apps_menuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApps_menuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the apps_menu model
   */
  readonly fields: apps_menuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for apps_menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__apps_menuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the apps_menu model
   */ 
  interface apps_menuFieldRefs {
    readonly id: FieldRef<"apps_menu", 'Int'>
    readonly topmain: FieldRef<"apps_menu", 'String'>
    readonly main: FieldRef<"apps_menu", 'String'>
    readonly menu: FieldRef<"apps_menu", 'String'>
    readonly link: FieldRef<"apps_menu", 'String'>
    readonly icon: FieldRef<"apps_menu", 'String'>
    readonly flag: FieldRef<"apps_menu", 'Int'>
    readonly created_by: FieldRef<"apps_menu", 'Int'>
    readonly created_at: FieldRef<"apps_menu", 'DateTime'>
    readonly updated_by: FieldRef<"apps_menu", 'Int'>
    readonly updated_at: FieldRef<"apps_menu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * apps_menu findUnique
   */
  export type apps_menuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apps_menu
     */
    select?: apps_menuSelect<ExtArgs> | null
    /**
     * Filter, which apps_menu to fetch.
     */
    where: apps_menuWhereUniqueInput
  }

  /**
   * apps_menu findUniqueOrThrow
   */
  export type apps_menuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apps_menu
     */
    select?: apps_menuSelect<ExtArgs> | null
    /**
     * Filter, which apps_menu to fetch.
     */
    where: apps_menuWhereUniqueInput
  }

  /**
   * apps_menu findFirst
   */
  export type apps_menuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apps_menu
     */
    select?: apps_menuSelect<ExtArgs> | null
    /**
     * Filter, which apps_menu to fetch.
     */
    where?: apps_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apps_menus to fetch.
     */
    orderBy?: apps_menuOrderByWithRelationInput | apps_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apps_menus.
     */
    cursor?: apps_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apps_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apps_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apps_menus.
     */
    distinct?: Apps_menuScalarFieldEnum | Apps_menuScalarFieldEnum[]
  }

  /**
   * apps_menu findFirstOrThrow
   */
  export type apps_menuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apps_menu
     */
    select?: apps_menuSelect<ExtArgs> | null
    /**
     * Filter, which apps_menu to fetch.
     */
    where?: apps_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apps_menus to fetch.
     */
    orderBy?: apps_menuOrderByWithRelationInput | apps_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apps_menus.
     */
    cursor?: apps_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apps_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apps_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apps_menus.
     */
    distinct?: Apps_menuScalarFieldEnum | Apps_menuScalarFieldEnum[]
  }

  /**
   * apps_menu findMany
   */
  export type apps_menuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apps_menu
     */
    select?: apps_menuSelect<ExtArgs> | null
    /**
     * Filter, which apps_menus to fetch.
     */
    where?: apps_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apps_menus to fetch.
     */
    orderBy?: apps_menuOrderByWithRelationInput | apps_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing apps_menus.
     */
    cursor?: apps_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apps_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apps_menus.
     */
    skip?: number
    distinct?: Apps_menuScalarFieldEnum | Apps_menuScalarFieldEnum[]
  }

  /**
   * apps_menu create
   */
  export type apps_menuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apps_menu
     */
    select?: apps_menuSelect<ExtArgs> | null
    /**
     * The data needed to create a apps_menu.
     */
    data: XOR<apps_menuCreateInput, apps_menuUncheckedCreateInput>
  }

  /**
   * apps_menu createMany
   */
  export type apps_menuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many apps_menus.
     */
    data: apps_menuCreateManyInput | apps_menuCreateManyInput[]
  }

  /**
   * apps_menu update
   */
  export type apps_menuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apps_menu
     */
    select?: apps_menuSelect<ExtArgs> | null
    /**
     * The data needed to update a apps_menu.
     */
    data: XOR<apps_menuUpdateInput, apps_menuUncheckedUpdateInput>
    /**
     * Choose, which apps_menu to update.
     */
    where: apps_menuWhereUniqueInput
  }

  /**
   * apps_menu updateMany
   */
  export type apps_menuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update apps_menus.
     */
    data: XOR<apps_menuUpdateManyMutationInput, apps_menuUncheckedUpdateManyInput>
    /**
     * Filter which apps_menus to update
     */
    where?: apps_menuWhereInput
  }

  /**
   * apps_menu upsert
   */
  export type apps_menuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apps_menu
     */
    select?: apps_menuSelect<ExtArgs> | null
    /**
     * The filter to search for the apps_menu to update in case it exists.
     */
    where: apps_menuWhereUniqueInput
    /**
     * In case the apps_menu found by the `where` argument doesn't exist, create a new apps_menu with this data.
     */
    create: XOR<apps_menuCreateInput, apps_menuUncheckedCreateInput>
    /**
     * In case the apps_menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<apps_menuUpdateInput, apps_menuUncheckedUpdateInput>
  }

  /**
   * apps_menu delete
   */
  export type apps_menuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apps_menu
     */
    select?: apps_menuSelect<ExtArgs> | null
    /**
     * Filter which apps_menu to delete.
     */
    where: apps_menuWhereUniqueInput
  }

  /**
   * apps_menu deleteMany
   */
  export type apps_menuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apps_menus to delete
     */
    where?: apps_menuWhereInput
  }

  /**
   * apps_menu without action
   */
  export type apps_menuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apps_menu
     */
    select?: apps_menuSelect<ExtArgs> | null
  }


  /**
   * Model permission_group_menu
   */

  export type AggregatePermission_group_menu = {
    _count: Permission_group_menuCountAggregateOutputType | null
    _avg: Permission_group_menuAvgAggregateOutputType | null
    _sum: Permission_group_menuSumAggregateOutputType | null
    _min: Permission_group_menuMinAggregateOutputType | null
    _max: Permission_group_menuMaxAggregateOutputType | null
  }

  export type Permission_group_menuAvgAggregateOutputType = {
    id: number | null
    group: number | null
    menu: number | null
    access: number | null
    c: number | null
    r: number | null
    u: number | null
    d: number | null
    v: number | null
  }

  export type Permission_group_menuSumAggregateOutputType = {
    id: number | null
    group: number | null
    menu: number | null
    access: number | null
    c: number | null
    r: number | null
    u: number | null
    d: number | null
    v: number | null
  }

  export type Permission_group_menuMinAggregateOutputType = {
    id: number | null
    group: number | null
    menu: number | null
    access: number | null
    c: number | null
    r: number | null
    u: number | null
    d: number | null
    v: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Permission_group_menuMaxAggregateOutputType = {
    id: number | null
    group: number | null
    menu: number | null
    access: number | null
    c: number | null
    r: number | null
    u: number | null
    d: number | null
    v: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Permission_group_menuCountAggregateOutputType = {
    id: number
    group: number
    menu: number
    access: number
    c: number
    r: number
    u: number
    d: number
    v: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Permission_group_menuAvgAggregateInputType = {
    id?: true
    group?: true
    menu?: true
    access?: true
    c?: true
    r?: true
    u?: true
    d?: true
    v?: true
  }

  export type Permission_group_menuSumAggregateInputType = {
    id?: true
    group?: true
    menu?: true
    access?: true
    c?: true
    r?: true
    u?: true
    d?: true
    v?: true
  }

  export type Permission_group_menuMinAggregateInputType = {
    id?: true
    group?: true
    menu?: true
    access?: true
    c?: true
    r?: true
    u?: true
    d?: true
    v?: true
    created_at?: true
    updated_at?: true
  }

  export type Permission_group_menuMaxAggregateInputType = {
    id?: true
    group?: true
    menu?: true
    access?: true
    c?: true
    r?: true
    u?: true
    d?: true
    v?: true
    created_at?: true
    updated_at?: true
  }

  export type Permission_group_menuCountAggregateInputType = {
    id?: true
    group?: true
    menu?: true
    access?: true
    c?: true
    r?: true
    u?: true
    d?: true
    v?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Permission_group_menuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which permission_group_menu to aggregate.
     */
    where?: permission_group_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permission_group_menus to fetch.
     */
    orderBy?: permission_group_menuOrderByWithRelationInput | permission_group_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: permission_group_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permission_group_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permission_group_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned permission_group_menus
    **/
    _count?: true | Permission_group_menuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Permission_group_menuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Permission_group_menuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Permission_group_menuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Permission_group_menuMaxAggregateInputType
  }

  export type GetPermission_group_menuAggregateType<T extends Permission_group_menuAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission_group_menu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission_group_menu[P]>
      : GetScalarType<T[P], AggregatePermission_group_menu[P]>
  }




  export type permission_group_menuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: permission_group_menuWhereInput
    orderBy?: permission_group_menuOrderByWithAggregationInput | permission_group_menuOrderByWithAggregationInput[]
    by: Permission_group_menuScalarFieldEnum[] | Permission_group_menuScalarFieldEnum
    having?: permission_group_menuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Permission_group_menuCountAggregateInputType | true
    _avg?: Permission_group_menuAvgAggregateInputType
    _sum?: Permission_group_menuSumAggregateInputType
    _min?: Permission_group_menuMinAggregateInputType
    _max?: Permission_group_menuMaxAggregateInputType
  }

  export type Permission_group_menuGroupByOutputType = {
    id: number
    group: number | null
    menu: number | null
    access: number | null
    c: number
    r: number
    u: number
    d: number
    v: number
    created_at: Date
    updated_at: Date | null
    _count: Permission_group_menuCountAggregateOutputType | null
    _avg: Permission_group_menuAvgAggregateOutputType | null
    _sum: Permission_group_menuSumAggregateOutputType | null
    _min: Permission_group_menuMinAggregateOutputType | null
    _max: Permission_group_menuMaxAggregateOutputType | null
  }

  type GetPermission_group_menuGroupByPayload<T extends permission_group_menuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Permission_group_menuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Permission_group_menuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Permission_group_menuGroupByOutputType[P]>
            : GetScalarType<T[P], Permission_group_menuGroupByOutputType[P]>
        }
      >
    >


  export type permission_group_menuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group?: boolean
    menu?: boolean
    access?: boolean
    c?: boolean
    r?: boolean
    u?: boolean
    d?: boolean
    v?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["permission_group_menu"]>


  export type permission_group_menuSelectScalar = {
    id?: boolean
    group?: boolean
    menu?: boolean
    access?: boolean
    c?: boolean
    r?: boolean
    u?: boolean
    d?: boolean
    v?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $permission_group_menuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "permission_group_menu"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      group: number | null
      menu: number | null
      access: number | null
      c: number
      r: number
      u: number
      d: number
      v: number
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["permission_group_menu"]>
    composites: {}
  }

  type permission_group_menuGetPayload<S extends boolean | null | undefined | permission_group_menuDefaultArgs> = $Result.GetResult<Prisma.$permission_group_menuPayload, S>

  type permission_group_menuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<permission_group_menuFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Permission_group_menuCountAggregateInputType | true
    }

  export interface permission_group_menuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['permission_group_menu'], meta: { name: 'permission_group_menu' } }
    /**
     * Find zero or one Permission_group_menu that matches the filter.
     * @param {permission_group_menuFindUniqueArgs} args - Arguments to find a Permission_group_menu
     * @example
     * // Get one Permission_group_menu
     * const permission_group_menu = await prisma.permission_group_menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends permission_group_menuFindUniqueArgs>(args: SelectSubset<T, permission_group_menuFindUniqueArgs<ExtArgs>>): Prisma__permission_group_menuClient<$Result.GetResult<Prisma.$permission_group_menuPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Permission_group_menu that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {permission_group_menuFindUniqueOrThrowArgs} args - Arguments to find a Permission_group_menu
     * @example
     * // Get one Permission_group_menu
     * const permission_group_menu = await prisma.permission_group_menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends permission_group_menuFindUniqueOrThrowArgs>(args: SelectSubset<T, permission_group_menuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__permission_group_menuClient<$Result.GetResult<Prisma.$permission_group_menuPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Permission_group_menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permission_group_menuFindFirstArgs} args - Arguments to find a Permission_group_menu
     * @example
     * // Get one Permission_group_menu
     * const permission_group_menu = await prisma.permission_group_menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends permission_group_menuFindFirstArgs>(args?: SelectSubset<T, permission_group_menuFindFirstArgs<ExtArgs>>): Prisma__permission_group_menuClient<$Result.GetResult<Prisma.$permission_group_menuPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Permission_group_menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permission_group_menuFindFirstOrThrowArgs} args - Arguments to find a Permission_group_menu
     * @example
     * // Get one Permission_group_menu
     * const permission_group_menu = await prisma.permission_group_menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends permission_group_menuFindFirstOrThrowArgs>(args?: SelectSubset<T, permission_group_menuFindFirstOrThrowArgs<ExtArgs>>): Prisma__permission_group_menuClient<$Result.GetResult<Prisma.$permission_group_menuPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Permission_group_menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permission_group_menuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permission_group_menus
     * const permission_group_menus = await prisma.permission_group_menu.findMany()
     * 
     * // Get first 10 Permission_group_menus
     * const permission_group_menus = await prisma.permission_group_menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permission_group_menuWithIdOnly = await prisma.permission_group_menu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends permission_group_menuFindManyArgs>(args?: SelectSubset<T, permission_group_menuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permission_group_menuPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Permission_group_menu.
     * @param {permission_group_menuCreateArgs} args - Arguments to create a Permission_group_menu.
     * @example
     * // Create one Permission_group_menu
     * const Permission_group_menu = await prisma.permission_group_menu.create({
     *   data: {
     *     // ... data to create a Permission_group_menu
     *   }
     * })
     * 
     */
    create<T extends permission_group_menuCreateArgs>(args: SelectSubset<T, permission_group_menuCreateArgs<ExtArgs>>): Prisma__permission_group_menuClient<$Result.GetResult<Prisma.$permission_group_menuPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Permission_group_menus.
     * @param {permission_group_menuCreateManyArgs} args - Arguments to create many Permission_group_menus.
     * @example
     * // Create many Permission_group_menus
     * const permission_group_menu = await prisma.permission_group_menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends permission_group_menuCreateManyArgs>(args?: SelectSubset<T, permission_group_menuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Permission_group_menu.
     * @param {permission_group_menuDeleteArgs} args - Arguments to delete one Permission_group_menu.
     * @example
     * // Delete one Permission_group_menu
     * const Permission_group_menu = await prisma.permission_group_menu.delete({
     *   where: {
     *     // ... filter to delete one Permission_group_menu
     *   }
     * })
     * 
     */
    delete<T extends permission_group_menuDeleteArgs>(args: SelectSubset<T, permission_group_menuDeleteArgs<ExtArgs>>): Prisma__permission_group_menuClient<$Result.GetResult<Prisma.$permission_group_menuPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Permission_group_menu.
     * @param {permission_group_menuUpdateArgs} args - Arguments to update one Permission_group_menu.
     * @example
     * // Update one Permission_group_menu
     * const permission_group_menu = await prisma.permission_group_menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends permission_group_menuUpdateArgs>(args: SelectSubset<T, permission_group_menuUpdateArgs<ExtArgs>>): Prisma__permission_group_menuClient<$Result.GetResult<Prisma.$permission_group_menuPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Permission_group_menus.
     * @param {permission_group_menuDeleteManyArgs} args - Arguments to filter Permission_group_menus to delete.
     * @example
     * // Delete a few Permission_group_menus
     * const { count } = await prisma.permission_group_menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends permission_group_menuDeleteManyArgs>(args?: SelectSubset<T, permission_group_menuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permission_group_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permission_group_menuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permission_group_menus
     * const permission_group_menu = await prisma.permission_group_menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends permission_group_menuUpdateManyArgs>(args: SelectSubset<T, permission_group_menuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permission_group_menu.
     * @param {permission_group_menuUpsertArgs} args - Arguments to update or create a Permission_group_menu.
     * @example
     * // Update or create a Permission_group_menu
     * const permission_group_menu = await prisma.permission_group_menu.upsert({
     *   create: {
     *     // ... data to create a Permission_group_menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission_group_menu we want to update
     *   }
     * })
     */
    upsert<T extends permission_group_menuUpsertArgs>(args: SelectSubset<T, permission_group_menuUpsertArgs<ExtArgs>>): Prisma__permission_group_menuClient<$Result.GetResult<Prisma.$permission_group_menuPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Permission_group_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permission_group_menuCountArgs} args - Arguments to filter Permission_group_menus to count.
     * @example
     * // Count the number of Permission_group_menus
     * const count = await prisma.permission_group_menu.count({
     *   where: {
     *     // ... the filter for the Permission_group_menus we want to count
     *   }
     * })
    **/
    count<T extends permission_group_menuCountArgs>(
      args?: Subset<T, permission_group_menuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Permission_group_menuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission_group_menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Permission_group_menuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Permission_group_menuAggregateArgs>(args: Subset<T, Permission_group_menuAggregateArgs>): Prisma.PrismaPromise<GetPermission_group_menuAggregateType<T>>

    /**
     * Group by Permission_group_menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permission_group_menuGroupByArgs} args - Group by arguments.
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
      T extends permission_group_menuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: permission_group_menuGroupByArgs['orderBy'] }
        : { orderBy?: permission_group_menuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, permission_group_menuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermission_group_menuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the permission_group_menu model
   */
  readonly fields: permission_group_menuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for permission_group_menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__permission_group_menuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the permission_group_menu model
   */ 
  interface permission_group_menuFieldRefs {
    readonly id: FieldRef<"permission_group_menu", 'Int'>
    readonly group: FieldRef<"permission_group_menu", 'Int'>
    readonly menu: FieldRef<"permission_group_menu", 'Int'>
    readonly access: FieldRef<"permission_group_menu", 'Int'>
    readonly c: FieldRef<"permission_group_menu", 'Int'>
    readonly r: FieldRef<"permission_group_menu", 'Int'>
    readonly u: FieldRef<"permission_group_menu", 'Int'>
    readonly d: FieldRef<"permission_group_menu", 'Int'>
    readonly v: FieldRef<"permission_group_menu", 'Int'>
    readonly created_at: FieldRef<"permission_group_menu", 'DateTime'>
    readonly updated_at: FieldRef<"permission_group_menu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * permission_group_menu findUnique
   */
  export type permission_group_menuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission_group_menu
     */
    select?: permission_group_menuSelect<ExtArgs> | null
    /**
     * Filter, which permission_group_menu to fetch.
     */
    where: permission_group_menuWhereUniqueInput
  }

  /**
   * permission_group_menu findUniqueOrThrow
   */
  export type permission_group_menuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission_group_menu
     */
    select?: permission_group_menuSelect<ExtArgs> | null
    /**
     * Filter, which permission_group_menu to fetch.
     */
    where: permission_group_menuWhereUniqueInput
  }

  /**
   * permission_group_menu findFirst
   */
  export type permission_group_menuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission_group_menu
     */
    select?: permission_group_menuSelect<ExtArgs> | null
    /**
     * Filter, which permission_group_menu to fetch.
     */
    where?: permission_group_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permission_group_menus to fetch.
     */
    orderBy?: permission_group_menuOrderByWithRelationInput | permission_group_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permission_group_menus.
     */
    cursor?: permission_group_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permission_group_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permission_group_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permission_group_menus.
     */
    distinct?: Permission_group_menuScalarFieldEnum | Permission_group_menuScalarFieldEnum[]
  }

  /**
   * permission_group_menu findFirstOrThrow
   */
  export type permission_group_menuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission_group_menu
     */
    select?: permission_group_menuSelect<ExtArgs> | null
    /**
     * Filter, which permission_group_menu to fetch.
     */
    where?: permission_group_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permission_group_menus to fetch.
     */
    orderBy?: permission_group_menuOrderByWithRelationInput | permission_group_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permission_group_menus.
     */
    cursor?: permission_group_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permission_group_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permission_group_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permission_group_menus.
     */
    distinct?: Permission_group_menuScalarFieldEnum | Permission_group_menuScalarFieldEnum[]
  }

  /**
   * permission_group_menu findMany
   */
  export type permission_group_menuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission_group_menu
     */
    select?: permission_group_menuSelect<ExtArgs> | null
    /**
     * Filter, which permission_group_menus to fetch.
     */
    where?: permission_group_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permission_group_menus to fetch.
     */
    orderBy?: permission_group_menuOrderByWithRelationInput | permission_group_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing permission_group_menus.
     */
    cursor?: permission_group_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permission_group_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permission_group_menus.
     */
    skip?: number
    distinct?: Permission_group_menuScalarFieldEnum | Permission_group_menuScalarFieldEnum[]
  }

  /**
   * permission_group_menu create
   */
  export type permission_group_menuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission_group_menu
     */
    select?: permission_group_menuSelect<ExtArgs> | null
    /**
     * The data needed to create a permission_group_menu.
     */
    data: XOR<permission_group_menuCreateInput, permission_group_menuUncheckedCreateInput>
  }

  /**
   * permission_group_menu createMany
   */
  export type permission_group_menuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many permission_group_menus.
     */
    data: permission_group_menuCreateManyInput | permission_group_menuCreateManyInput[]
  }

  /**
   * permission_group_menu update
   */
  export type permission_group_menuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission_group_menu
     */
    select?: permission_group_menuSelect<ExtArgs> | null
    /**
     * The data needed to update a permission_group_menu.
     */
    data: XOR<permission_group_menuUpdateInput, permission_group_menuUncheckedUpdateInput>
    /**
     * Choose, which permission_group_menu to update.
     */
    where: permission_group_menuWhereUniqueInput
  }

  /**
   * permission_group_menu updateMany
   */
  export type permission_group_menuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update permission_group_menus.
     */
    data: XOR<permission_group_menuUpdateManyMutationInput, permission_group_menuUncheckedUpdateManyInput>
    /**
     * Filter which permission_group_menus to update
     */
    where?: permission_group_menuWhereInput
  }

  /**
   * permission_group_menu upsert
   */
  export type permission_group_menuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission_group_menu
     */
    select?: permission_group_menuSelect<ExtArgs> | null
    /**
     * The filter to search for the permission_group_menu to update in case it exists.
     */
    where: permission_group_menuWhereUniqueInput
    /**
     * In case the permission_group_menu found by the `where` argument doesn't exist, create a new permission_group_menu with this data.
     */
    create: XOR<permission_group_menuCreateInput, permission_group_menuUncheckedCreateInput>
    /**
     * In case the permission_group_menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<permission_group_menuUpdateInput, permission_group_menuUncheckedUpdateInput>
  }

  /**
   * permission_group_menu delete
   */
  export type permission_group_menuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission_group_menu
     */
    select?: permission_group_menuSelect<ExtArgs> | null
    /**
     * Filter which permission_group_menu to delete.
     */
    where: permission_group_menuWhereUniqueInput
  }

  /**
   * permission_group_menu deleteMany
   */
  export type permission_group_menuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which permission_group_menus to delete
     */
    where?: permission_group_menuWhereInput
  }

  /**
   * permission_group_menu without action
   */
  export type permission_group_menuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission_group_menu
     */
    select?: permission_group_menuSelect<ExtArgs> | null
  }


  /**
   * Model role_group
   */

  export type AggregateRole_group = {
    _count: Role_groupCountAggregateOutputType | null
    _avg: Role_groupAvgAggregateOutputType | null
    _sum: Role_groupSumAggregateOutputType | null
    _min: Role_groupMinAggregateOutputType | null
    _max: Role_groupMaxAggregateOutputType | null
  }

  export type Role_groupAvgAggregateOutputType = {
    id: number | null
    flag: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type Role_groupSumAggregateOutputType = {
    id: number | null
    flag: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type Role_groupMinAggregateOutputType = {
    id: number | null
    name: string | null
    flag: number | null
    created_by: number | null
    created_at: Date | null
    updated_by: number | null
    updated_at: Date | null
  }

  export type Role_groupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    flag: number | null
    created_by: number | null
    created_at: Date | null
    updated_by: number | null
    updated_at: Date | null
  }

  export type Role_groupCountAggregateOutputType = {
    id: number
    name: number
    flag: number
    created_by: number
    created_at: number
    updated_by: number
    updated_at: number
    _all: number
  }


  export type Role_groupAvgAggregateInputType = {
    id?: true
    flag?: true
    created_by?: true
    updated_by?: true
  }

  export type Role_groupSumAggregateInputType = {
    id?: true
    flag?: true
    created_by?: true
    updated_by?: true
  }

  export type Role_groupMinAggregateInputType = {
    id?: true
    name?: true
    flag?: true
    created_by?: true
    created_at?: true
    updated_by?: true
    updated_at?: true
  }

  export type Role_groupMaxAggregateInputType = {
    id?: true
    name?: true
    flag?: true
    created_by?: true
    created_at?: true
    updated_by?: true
    updated_at?: true
  }

  export type Role_groupCountAggregateInputType = {
    id?: true
    name?: true
    flag?: true
    created_by?: true
    created_at?: true
    updated_by?: true
    updated_at?: true
    _all?: true
  }

  export type Role_groupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role_group to aggregate.
     */
    where?: role_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_groups to fetch.
     */
    orderBy?: role_groupOrderByWithRelationInput | role_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: role_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned role_groups
    **/
    _count?: true | Role_groupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Role_groupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Role_groupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Role_groupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Role_groupMaxAggregateInputType
  }

  export type GetRole_groupAggregateType<T extends Role_groupAggregateArgs> = {
        [P in keyof T & keyof AggregateRole_group]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole_group[P]>
      : GetScalarType<T[P], AggregateRole_group[P]>
  }




  export type role_groupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: role_groupWhereInput
    orderBy?: role_groupOrderByWithAggregationInput | role_groupOrderByWithAggregationInput[]
    by: Role_groupScalarFieldEnum[] | Role_groupScalarFieldEnum
    having?: role_groupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Role_groupCountAggregateInputType | true
    _avg?: Role_groupAvgAggregateInputType
    _sum?: Role_groupSumAggregateInputType
    _min?: Role_groupMinAggregateInputType
    _max?: Role_groupMaxAggregateInputType
  }

  export type Role_groupGroupByOutputType = {
    id: number
    name: string
    flag: number
    created_by: number
    created_at: Date
    updated_by: number | null
    updated_at: Date | null
    _count: Role_groupCountAggregateOutputType | null
    _avg: Role_groupAvgAggregateOutputType | null
    _sum: Role_groupSumAggregateOutputType | null
    _min: Role_groupMinAggregateOutputType | null
    _max: Role_groupMaxAggregateOutputType | null
  }

  type GetRole_groupGroupByPayload<T extends role_groupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Role_groupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Role_groupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Role_groupGroupByOutputType[P]>
            : GetScalarType<T[P], Role_groupGroupByOutputType[P]>
        }
      >
    >


  export type role_groupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    flag?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_by?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["role_group"]>


  export type role_groupSelectScalar = {
    id?: boolean
    name?: boolean
    flag?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_by?: boolean
    updated_at?: boolean
  }


  export type $role_groupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "role_group"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      flag: number
      created_by: number
      created_at: Date
      updated_by: number | null
      updated_at: Date | null
    }, ExtArgs["result"]["role_group"]>
    composites: {}
  }

  type role_groupGetPayload<S extends boolean | null | undefined | role_groupDefaultArgs> = $Result.GetResult<Prisma.$role_groupPayload, S>

  type role_groupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<role_groupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Role_groupCountAggregateInputType | true
    }

  export interface role_groupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role_group'], meta: { name: 'role_group' } }
    /**
     * Find zero or one Role_group that matches the filter.
     * @param {role_groupFindUniqueArgs} args - Arguments to find a Role_group
     * @example
     * // Get one Role_group
     * const role_group = await prisma.role_group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends role_groupFindUniqueArgs>(args: SelectSubset<T, role_groupFindUniqueArgs<ExtArgs>>): Prisma__role_groupClient<$Result.GetResult<Prisma.$role_groupPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Role_group that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {role_groupFindUniqueOrThrowArgs} args - Arguments to find a Role_group
     * @example
     * // Get one Role_group
     * const role_group = await prisma.role_group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends role_groupFindUniqueOrThrowArgs>(args: SelectSubset<T, role_groupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__role_groupClient<$Result.GetResult<Prisma.$role_groupPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Role_group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_groupFindFirstArgs} args - Arguments to find a Role_group
     * @example
     * // Get one Role_group
     * const role_group = await prisma.role_group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends role_groupFindFirstArgs>(args?: SelectSubset<T, role_groupFindFirstArgs<ExtArgs>>): Prisma__role_groupClient<$Result.GetResult<Prisma.$role_groupPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Role_group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_groupFindFirstOrThrowArgs} args - Arguments to find a Role_group
     * @example
     * // Get one Role_group
     * const role_group = await prisma.role_group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends role_groupFindFirstOrThrowArgs>(args?: SelectSubset<T, role_groupFindFirstOrThrowArgs<ExtArgs>>): Prisma__role_groupClient<$Result.GetResult<Prisma.$role_groupPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Role_groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_groupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Role_groups
     * const role_groups = await prisma.role_group.findMany()
     * 
     * // Get first 10 Role_groups
     * const role_groups = await prisma.role_group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const role_groupWithIdOnly = await prisma.role_group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends role_groupFindManyArgs>(args?: SelectSubset<T, role_groupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_groupPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Role_group.
     * @param {role_groupCreateArgs} args - Arguments to create a Role_group.
     * @example
     * // Create one Role_group
     * const Role_group = await prisma.role_group.create({
     *   data: {
     *     // ... data to create a Role_group
     *   }
     * })
     * 
     */
    create<T extends role_groupCreateArgs>(args: SelectSubset<T, role_groupCreateArgs<ExtArgs>>): Prisma__role_groupClient<$Result.GetResult<Prisma.$role_groupPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Role_groups.
     * @param {role_groupCreateManyArgs} args - Arguments to create many Role_groups.
     * @example
     * // Create many Role_groups
     * const role_group = await prisma.role_group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends role_groupCreateManyArgs>(args?: SelectSubset<T, role_groupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role_group.
     * @param {role_groupDeleteArgs} args - Arguments to delete one Role_group.
     * @example
     * // Delete one Role_group
     * const Role_group = await prisma.role_group.delete({
     *   where: {
     *     // ... filter to delete one Role_group
     *   }
     * })
     * 
     */
    delete<T extends role_groupDeleteArgs>(args: SelectSubset<T, role_groupDeleteArgs<ExtArgs>>): Prisma__role_groupClient<$Result.GetResult<Prisma.$role_groupPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Role_group.
     * @param {role_groupUpdateArgs} args - Arguments to update one Role_group.
     * @example
     * // Update one Role_group
     * const role_group = await prisma.role_group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends role_groupUpdateArgs>(args: SelectSubset<T, role_groupUpdateArgs<ExtArgs>>): Prisma__role_groupClient<$Result.GetResult<Prisma.$role_groupPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Role_groups.
     * @param {role_groupDeleteManyArgs} args - Arguments to filter Role_groups to delete.
     * @example
     * // Delete a few Role_groups
     * const { count } = await prisma.role_group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends role_groupDeleteManyArgs>(args?: SelectSubset<T, role_groupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Role_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_groupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Role_groups
     * const role_group = await prisma.role_group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends role_groupUpdateManyArgs>(args: SelectSubset<T, role_groupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role_group.
     * @param {role_groupUpsertArgs} args - Arguments to update or create a Role_group.
     * @example
     * // Update or create a Role_group
     * const role_group = await prisma.role_group.upsert({
     *   create: {
     *     // ... data to create a Role_group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role_group we want to update
     *   }
     * })
     */
    upsert<T extends role_groupUpsertArgs>(args: SelectSubset<T, role_groupUpsertArgs<ExtArgs>>): Prisma__role_groupClient<$Result.GetResult<Prisma.$role_groupPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Role_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_groupCountArgs} args - Arguments to filter Role_groups to count.
     * @example
     * // Count the number of Role_groups
     * const count = await prisma.role_group.count({
     *   where: {
     *     // ... the filter for the Role_groups we want to count
     *   }
     * })
    **/
    count<T extends role_groupCountArgs>(
      args?: Subset<T, role_groupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Role_groupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role_group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_groupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Role_groupAggregateArgs>(args: Subset<T, Role_groupAggregateArgs>): Prisma.PrismaPromise<GetRole_groupAggregateType<T>>

    /**
     * Group by Role_group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_groupGroupByArgs} args - Group by arguments.
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
      T extends role_groupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: role_groupGroupByArgs['orderBy'] }
        : { orderBy?: role_groupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, role_groupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRole_groupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the role_group model
   */
  readonly fields: role_groupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role_group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__role_groupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the role_group model
   */ 
  interface role_groupFieldRefs {
    readonly id: FieldRef<"role_group", 'Int'>
    readonly name: FieldRef<"role_group", 'String'>
    readonly flag: FieldRef<"role_group", 'Int'>
    readonly created_by: FieldRef<"role_group", 'Int'>
    readonly created_at: FieldRef<"role_group", 'DateTime'>
    readonly updated_by: FieldRef<"role_group", 'Int'>
    readonly updated_at: FieldRef<"role_group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * role_group findUnique
   */
  export type role_groupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_group
     */
    select?: role_groupSelect<ExtArgs> | null
    /**
     * Filter, which role_group to fetch.
     */
    where: role_groupWhereUniqueInput
  }

  /**
   * role_group findUniqueOrThrow
   */
  export type role_groupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_group
     */
    select?: role_groupSelect<ExtArgs> | null
    /**
     * Filter, which role_group to fetch.
     */
    where: role_groupWhereUniqueInput
  }

  /**
   * role_group findFirst
   */
  export type role_groupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_group
     */
    select?: role_groupSelect<ExtArgs> | null
    /**
     * Filter, which role_group to fetch.
     */
    where?: role_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_groups to fetch.
     */
    orderBy?: role_groupOrderByWithRelationInput | role_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for role_groups.
     */
    cursor?: role_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of role_groups.
     */
    distinct?: Role_groupScalarFieldEnum | Role_groupScalarFieldEnum[]
  }

  /**
   * role_group findFirstOrThrow
   */
  export type role_groupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_group
     */
    select?: role_groupSelect<ExtArgs> | null
    /**
     * Filter, which role_group to fetch.
     */
    where?: role_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_groups to fetch.
     */
    orderBy?: role_groupOrderByWithRelationInput | role_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for role_groups.
     */
    cursor?: role_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of role_groups.
     */
    distinct?: Role_groupScalarFieldEnum | Role_groupScalarFieldEnum[]
  }

  /**
   * role_group findMany
   */
  export type role_groupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_group
     */
    select?: role_groupSelect<ExtArgs> | null
    /**
     * Filter, which role_groups to fetch.
     */
    where?: role_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_groups to fetch.
     */
    orderBy?: role_groupOrderByWithRelationInput | role_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing role_groups.
     */
    cursor?: role_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_groups.
     */
    skip?: number
    distinct?: Role_groupScalarFieldEnum | Role_groupScalarFieldEnum[]
  }

  /**
   * role_group create
   */
  export type role_groupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_group
     */
    select?: role_groupSelect<ExtArgs> | null
    /**
     * The data needed to create a role_group.
     */
    data: XOR<role_groupCreateInput, role_groupUncheckedCreateInput>
  }

  /**
   * role_group createMany
   */
  export type role_groupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many role_groups.
     */
    data: role_groupCreateManyInput | role_groupCreateManyInput[]
  }

  /**
   * role_group update
   */
  export type role_groupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_group
     */
    select?: role_groupSelect<ExtArgs> | null
    /**
     * The data needed to update a role_group.
     */
    data: XOR<role_groupUpdateInput, role_groupUncheckedUpdateInput>
    /**
     * Choose, which role_group to update.
     */
    where: role_groupWhereUniqueInput
  }

  /**
   * role_group updateMany
   */
  export type role_groupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update role_groups.
     */
    data: XOR<role_groupUpdateManyMutationInput, role_groupUncheckedUpdateManyInput>
    /**
     * Filter which role_groups to update
     */
    where?: role_groupWhereInput
  }

  /**
   * role_group upsert
   */
  export type role_groupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_group
     */
    select?: role_groupSelect<ExtArgs> | null
    /**
     * The filter to search for the role_group to update in case it exists.
     */
    where: role_groupWhereUniqueInput
    /**
     * In case the role_group found by the `where` argument doesn't exist, create a new role_group with this data.
     */
    create: XOR<role_groupCreateInput, role_groupUncheckedCreateInput>
    /**
     * In case the role_group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<role_groupUpdateInput, role_groupUncheckedUpdateInput>
  }

  /**
   * role_group delete
   */
  export type role_groupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_group
     */
    select?: role_groupSelect<ExtArgs> | null
    /**
     * Filter which role_group to delete.
     */
    where: role_groupWhereUniqueInput
  }

  /**
   * role_group deleteMany
   */
  export type role_groupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role_groups to delete
     */
    where?: role_groupWhereInput
  }

  /**
   * role_group without action
   */
  export type role_groupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_group
     */
    select?: role_groupSelect<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    email_sf: 'email_sf',
    personal_number: 'personal_number',
    department: 'department',
    division: 'division',
    company_name: 'company_name',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Apps_menuScalarFieldEnum: {
    id: 'id',
    topmain: 'topmain',
    main: 'main',
    menu: 'menu',
    link: 'link',
    icon: 'icon',
    flag: 'flag',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_by: 'updated_by',
    updated_at: 'updated_at'
  };

  export type Apps_menuScalarFieldEnum = (typeof Apps_menuScalarFieldEnum)[keyof typeof Apps_menuScalarFieldEnum]


  export const Permission_group_menuScalarFieldEnum: {
    id: 'id',
    group: 'group',
    menu: 'menu',
    access: 'access',
    c: 'c',
    r: 'r',
    u: 'u',
    d: 'd',
    v: 'v',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Permission_group_menuScalarFieldEnum = (typeof Permission_group_menuScalarFieldEnum)[keyof typeof Permission_group_menuScalarFieldEnum]


  export const Role_groupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    flag: 'flag',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_by: 'updated_by',
    updated_at: 'updated_at'
  };

  export type Role_groupScalarFieldEnum = (typeof Role_groupScalarFieldEnum)[keyof typeof Role_groupScalarFieldEnum]


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email_sf?: StringFilter<"User"> | string
    personal_number?: StringFilter<"User"> | string
    department?: StringFilter<"User"> | string
    division?: StringFilter<"User"> | string
    company_name?: StringFilter<"User"> | string
    is_active?: IntFilter<"User"> | number
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    email_sf?: SortOrder
    personal_number?: SortOrder
    department?: SortOrder
    division?: SortOrder
    company_name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email_sf?: StringFilter<"User"> | string
    personal_number?: StringFilter<"User"> | string
    department?: StringFilter<"User"> | string
    division?: StringFilter<"User"> | string
    company_name?: StringFilter<"User"> | string
    is_active?: IntFilter<"User"> | number
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    email_sf?: SortOrder
    personal_number?: SortOrder
    department?: SortOrder
    division?: SortOrder
    company_name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email_sf?: StringWithAggregatesFilter<"User"> | string
    personal_number?: StringWithAggregatesFilter<"User"> | string
    department?: StringWithAggregatesFilter<"User"> | string
    division?: StringWithAggregatesFilter<"User"> | string
    company_name?: StringWithAggregatesFilter<"User"> | string
    is_active?: IntWithAggregatesFilter<"User"> | number
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type apps_menuWhereInput = {
    AND?: apps_menuWhereInput | apps_menuWhereInput[]
    OR?: apps_menuWhereInput[]
    NOT?: apps_menuWhereInput | apps_menuWhereInput[]
    id?: IntFilter<"apps_menu"> | number
    topmain?: StringNullableFilter<"apps_menu"> | string | null
    main?: StringNullableFilter<"apps_menu"> | string | null
    menu?: StringFilter<"apps_menu"> | string
    link?: StringFilter<"apps_menu"> | string
    icon?: StringFilter<"apps_menu"> | string
    flag?: IntFilter<"apps_menu"> | number
    created_by?: IntFilter<"apps_menu"> | number
    created_at?: DateTimeFilter<"apps_menu"> | Date | string
    updated_by?: IntNullableFilter<"apps_menu"> | number | null
    updated_at?: DateTimeNullableFilter<"apps_menu"> | Date | string | null
  }

  export type apps_menuOrderByWithRelationInput = {
    id?: SortOrder
    topmain?: SortOrderInput | SortOrder
    main?: SortOrderInput | SortOrder
    menu?: SortOrder
    link?: SortOrder
    icon?: SortOrder
    flag?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type apps_menuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: apps_menuWhereInput | apps_menuWhereInput[]
    OR?: apps_menuWhereInput[]
    NOT?: apps_menuWhereInput | apps_menuWhereInput[]
    topmain?: StringNullableFilter<"apps_menu"> | string | null
    main?: StringNullableFilter<"apps_menu"> | string | null
    menu?: StringFilter<"apps_menu"> | string
    link?: StringFilter<"apps_menu"> | string
    icon?: StringFilter<"apps_menu"> | string
    flag?: IntFilter<"apps_menu"> | number
    created_by?: IntFilter<"apps_menu"> | number
    created_at?: DateTimeFilter<"apps_menu"> | Date | string
    updated_by?: IntNullableFilter<"apps_menu"> | number | null
    updated_at?: DateTimeNullableFilter<"apps_menu"> | Date | string | null
  }, "id">

  export type apps_menuOrderByWithAggregationInput = {
    id?: SortOrder
    topmain?: SortOrderInput | SortOrder
    main?: SortOrderInput | SortOrder
    menu?: SortOrder
    link?: SortOrder
    icon?: SortOrder
    flag?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: apps_menuCountOrderByAggregateInput
    _avg?: apps_menuAvgOrderByAggregateInput
    _max?: apps_menuMaxOrderByAggregateInput
    _min?: apps_menuMinOrderByAggregateInput
    _sum?: apps_menuSumOrderByAggregateInput
  }

  export type apps_menuScalarWhereWithAggregatesInput = {
    AND?: apps_menuScalarWhereWithAggregatesInput | apps_menuScalarWhereWithAggregatesInput[]
    OR?: apps_menuScalarWhereWithAggregatesInput[]
    NOT?: apps_menuScalarWhereWithAggregatesInput | apps_menuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"apps_menu"> | number
    topmain?: StringNullableWithAggregatesFilter<"apps_menu"> | string | null
    main?: StringNullableWithAggregatesFilter<"apps_menu"> | string | null
    menu?: StringWithAggregatesFilter<"apps_menu"> | string
    link?: StringWithAggregatesFilter<"apps_menu"> | string
    icon?: StringWithAggregatesFilter<"apps_menu"> | string
    flag?: IntWithAggregatesFilter<"apps_menu"> | number
    created_by?: IntWithAggregatesFilter<"apps_menu"> | number
    created_at?: DateTimeWithAggregatesFilter<"apps_menu"> | Date | string
    updated_by?: IntNullableWithAggregatesFilter<"apps_menu"> | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"apps_menu"> | Date | string | null
  }

  export type permission_group_menuWhereInput = {
    AND?: permission_group_menuWhereInput | permission_group_menuWhereInput[]
    OR?: permission_group_menuWhereInput[]
    NOT?: permission_group_menuWhereInput | permission_group_menuWhereInput[]
    id?: IntFilter<"permission_group_menu"> | number
    group?: IntNullableFilter<"permission_group_menu"> | number | null
    menu?: IntNullableFilter<"permission_group_menu"> | number | null
    access?: IntNullableFilter<"permission_group_menu"> | number | null
    c?: IntFilter<"permission_group_menu"> | number
    r?: IntFilter<"permission_group_menu"> | number
    u?: IntFilter<"permission_group_menu"> | number
    d?: IntFilter<"permission_group_menu"> | number
    v?: IntFilter<"permission_group_menu"> | number
    created_at?: DateTimeFilter<"permission_group_menu"> | Date | string
    updated_at?: DateTimeNullableFilter<"permission_group_menu"> | Date | string | null
  }

  export type permission_group_menuOrderByWithRelationInput = {
    id?: SortOrder
    group?: SortOrderInput | SortOrder
    menu?: SortOrderInput | SortOrder
    access?: SortOrderInput | SortOrder
    c?: SortOrder
    r?: SortOrder
    u?: SortOrder
    d?: SortOrder
    v?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type permission_group_menuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: permission_group_menuWhereInput | permission_group_menuWhereInput[]
    OR?: permission_group_menuWhereInput[]
    NOT?: permission_group_menuWhereInput | permission_group_menuWhereInput[]
    group?: IntNullableFilter<"permission_group_menu"> | number | null
    menu?: IntNullableFilter<"permission_group_menu"> | number | null
    access?: IntNullableFilter<"permission_group_menu"> | number | null
    c?: IntFilter<"permission_group_menu"> | number
    r?: IntFilter<"permission_group_menu"> | number
    u?: IntFilter<"permission_group_menu"> | number
    d?: IntFilter<"permission_group_menu"> | number
    v?: IntFilter<"permission_group_menu"> | number
    created_at?: DateTimeFilter<"permission_group_menu"> | Date | string
    updated_at?: DateTimeNullableFilter<"permission_group_menu"> | Date | string | null
  }, "id">

  export type permission_group_menuOrderByWithAggregationInput = {
    id?: SortOrder
    group?: SortOrderInput | SortOrder
    menu?: SortOrderInput | SortOrder
    access?: SortOrderInput | SortOrder
    c?: SortOrder
    r?: SortOrder
    u?: SortOrder
    d?: SortOrder
    v?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: permission_group_menuCountOrderByAggregateInput
    _avg?: permission_group_menuAvgOrderByAggregateInput
    _max?: permission_group_menuMaxOrderByAggregateInput
    _min?: permission_group_menuMinOrderByAggregateInput
    _sum?: permission_group_menuSumOrderByAggregateInput
  }

  export type permission_group_menuScalarWhereWithAggregatesInput = {
    AND?: permission_group_menuScalarWhereWithAggregatesInput | permission_group_menuScalarWhereWithAggregatesInput[]
    OR?: permission_group_menuScalarWhereWithAggregatesInput[]
    NOT?: permission_group_menuScalarWhereWithAggregatesInput | permission_group_menuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"permission_group_menu"> | number
    group?: IntNullableWithAggregatesFilter<"permission_group_menu"> | number | null
    menu?: IntNullableWithAggregatesFilter<"permission_group_menu"> | number | null
    access?: IntNullableWithAggregatesFilter<"permission_group_menu"> | number | null
    c?: IntWithAggregatesFilter<"permission_group_menu"> | number
    r?: IntWithAggregatesFilter<"permission_group_menu"> | number
    u?: IntWithAggregatesFilter<"permission_group_menu"> | number
    d?: IntWithAggregatesFilter<"permission_group_menu"> | number
    v?: IntWithAggregatesFilter<"permission_group_menu"> | number
    created_at?: DateTimeWithAggregatesFilter<"permission_group_menu"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"permission_group_menu"> | Date | string | null
  }

  export type role_groupWhereInput = {
    AND?: role_groupWhereInput | role_groupWhereInput[]
    OR?: role_groupWhereInput[]
    NOT?: role_groupWhereInput | role_groupWhereInput[]
    id?: IntFilter<"role_group"> | number
    name?: StringFilter<"role_group"> | string
    flag?: IntFilter<"role_group"> | number
    created_by?: IntFilter<"role_group"> | number
    created_at?: DateTimeFilter<"role_group"> | Date | string
    updated_by?: IntNullableFilter<"role_group"> | number | null
    updated_at?: DateTimeNullableFilter<"role_group"> | Date | string | null
  }

  export type role_groupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    flag?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type role_groupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: role_groupWhereInput | role_groupWhereInput[]
    OR?: role_groupWhereInput[]
    NOT?: role_groupWhereInput | role_groupWhereInput[]
    name?: StringFilter<"role_group"> | string
    flag?: IntFilter<"role_group"> | number
    created_by?: IntFilter<"role_group"> | number
    created_at?: DateTimeFilter<"role_group"> | Date | string
    updated_by?: IntNullableFilter<"role_group"> | number | null
    updated_at?: DateTimeNullableFilter<"role_group"> | Date | string | null
  }, "id">

  export type role_groupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    flag?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: role_groupCountOrderByAggregateInput
    _avg?: role_groupAvgOrderByAggregateInput
    _max?: role_groupMaxOrderByAggregateInput
    _min?: role_groupMinOrderByAggregateInput
    _sum?: role_groupSumOrderByAggregateInput
  }

  export type role_groupScalarWhereWithAggregatesInput = {
    AND?: role_groupScalarWhereWithAggregatesInput | role_groupScalarWhereWithAggregatesInput[]
    OR?: role_groupScalarWhereWithAggregatesInput[]
    NOT?: role_groupScalarWhereWithAggregatesInput | role_groupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"role_group"> | number
    name?: StringWithAggregatesFilter<"role_group"> | string
    flag?: IntWithAggregatesFilter<"role_group"> | number
    created_by?: IntWithAggregatesFilter<"role_group"> | number
    created_at?: DateTimeWithAggregatesFilter<"role_group"> | Date | string
    updated_by?: IntNullableWithAggregatesFilter<"role_group"> | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"role_group"> | Date | string | null
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    email_sf: string
    personal_number: string
    department: string
    division: string
    company_name: string
    is_active: number
    created_at: Date | string
    updated_at?: Date | string | null
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    email_sf: string
    personal_number: string
    department: string
    division: string
    company_name: string
    is_active: number
    created_at: Date | string
    updated_at?: Date | string | null
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email_sf?: StringFieldUpdateOperationsInput | string
    personal_number?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    division?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    is_active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email_sf?: StringFieldUpdateOperationsInput | string
    personal_number?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    division?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    is_active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyInput = {
    name: string
    email: string
    password: string
    email_sf: string
    personal_number: string
    department: string
    division: string
    company_name: string
    is_active: number
    created_at: Date | string
    updated_at?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email_sf?: StringFieldUpdateOperationsInput | string
    personal_number?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    division?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    is_active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email_sf?: StringFieldUpdateOperationsInput | string
    personal_number?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    division?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    is_active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type apps_menuCreateInput = {
    topmain?: string | null
    main?: string | null
    menu: string
    link: string
    icon: string
    flag: number
    created_by: number
    created_at: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
  }

  export type apps_menuUncheckedCreateInput = {
    id?: number
    topmain?: string | null
    main?: string | null
    menu: string
    link: string
    icon: string
    flag: number
    created_by: number
    created_at: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
  }

  export type apps_menuUpdateInput = {
    topmain?: NullableStringFieldUpdateOperationsInput | string | null
    main?: NullableStringFieldUpdateOperationsInput | string | null
    menu?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    flag?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type apps_menuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    topmain?: NullableStringFieldUpdateOperationsInput | string | null
    main?: NullableStringFieldUpdateOperationsInput | string | null
    menu?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    flag?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type apps_menuCreateManyInput = {
    topmain?: string | null
    main?: string | null
    menu: string
    link: string
    icon: string
    flag: number
    created_by: number
    created_at: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
  }

  export type apps_menuUpdateManyMutationInput = {
    topmain?: NullableStringFieldUpdateOperationsInput | string | null
    main?: NullableStringFieldUpdateOperationsInput | string | null
    menu?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    flag?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type apps_menuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    topmain?: NullableStringFieldUpdateOperationsInput | string | null
    main?: NullableStringFieldUpdateOperationsInput | string | null
    menu?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    flag?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type permission_group_menuCreateInput = {
    group?: number | null
    menu?: number | null
    access?: number | null
    c: number
    r: number
    u: number
    d: number
    v: number
    created_at: Date | string
    updated_at?: Date | string | null
  }

  export type permission_group_menuUncheckedCreateInput = {
    id?: number
    group?: number | null
    menu?: number | null
    access?: number | null
    c: number
    r: number
    u: number
    d: number
    v: number
    created_at: Date | string
    updated_at?: Date | string | null
  }

  export type permission_group_menuUpdateInput = {
    group?: NullableIntFieldUpdateOperationsInput | number | null
    menu?: NullableIntFieldUpdateOperationsInput | number | null
    access?: NullableIntFieldUpdateOperationsInput | number | null
    c?: IntFieldUpdateOperationsInput | number
    r?: IntFieldUpdateOperationsInput | number
    u?: IntFieldUpdateOperationsInput | number
    d?: IntFieldUpdateOperationsInput | number
    v?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type permission_group_menuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    group?: NullableIntFieldUpdateOperationsInput | number | null
    menu?: NullableIntFieldUpdateOperationsInput | number | null
    access?: NullableIntFieldUpdateOperationsInput | number | null
    c?: IntFieldUpdateOperationsInput | number
    r?: IntFieldUpdateOperationsInput | number
    u?: IntFieldUpdateOperationsInput | number
    d?: IntFieldUpdateOperationsInput | number
    v?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type permission_group_menuCreateManyInput = {
    group?: number | null
    menu?: number | null
    access?: number | null
    c: number
    r: number
    u: number
    d: number
    v: number
    created_at: Date | string
    updated_at?: Date | string | null
  }

  export type permission_group_menuUpdateManyMutationInput = {
    group?: NullableIntFieldUpdateOperationsInput | number | null
    menu?: NullableIntFieldUpdateOperationsInput | number | null
    access?: NullableIntFieldUpdateOperationsInput | number | null
    c?: IntFieldUpdateOperationsInput | number
    r?: IntFieldUpdateOperationsInput | number
    u?: IntFieldUpdateOperationsInput | number
    d?: IntFieldUpdateOperationsInput | number
    v?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type permission_group_menuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    group?: NullableIntFieldUpdateOperationsInput | number | null
    menu?: NullableIntFieldUpdateOperationsInput | number | null
    access?: NullableIntFieldUpdateOperationsInput | number | null
    c?: IntFieldUpdateOperationsInput | number
    r?: IntFieldUpdateOperationsInput | number
    u?: IntFieldUpdateOperationsInput | number
    d?: IntFieldUpdateOperationsInput | number
    v?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type role_groupCreateInput = {
    name: string
    flag: number
    created_by: number
    created_at: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
  }

  export type role_groupUncheckedCreateInput = {
    id?: number
    name: string
    flag: number
    created_by: number
    created_at: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
  }

  export type role_groupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    flag?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type role_groupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    flag?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type role_groupCreateManyInput = {
    name: string
    flag: number
    created_by: number
    created_at: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
  }

  export type role_groupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    flag?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type role_groupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    flag?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    email_sf?: SortOrder
    personal_number?: SortOrder
    department?: SortOrder
    division?: SortOrder
    company_name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    is_active?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    email_sf?: SortOrder
    personal_number?: SortOrder
    department?: SortOrder
    division?: SortOrder
    company_name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    email_sf?: SortOrder
    personal_number?: SortOrder
    department?: SortOrder
    division?: SortOrder
    company_name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    is_active?: SortOrder
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type apps_menuCountOrderByAggregateInput = {
    id?: SortOrder
    topmain?: SortOrder
    main?: SortOrder
    menu?: SortOrder
    link?: SortOrder
    icon?: SortOrder
    flag?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
  }

  export type apps_menuAvgOrderByAggregateInput = {
    id?: SortOrder
    flag?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type apps_menuMaxOrderByAggregateInput = {
    id?: SortOrder
    topmain?: SortOrder
    main?: SortOrder
    menu?: SortOrder
    link?: SortOrder
    icon?: SortOrder
    flag?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
  }

  export type apps_menuMinOrderByAggregateInput = {
    id?: SortOrder
    topmain?: SortOrder
    main?: SortOrder
    menu?: SortOrder
    link?: SortOrder
    icon?: SortOrder
    flag?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
  }

  export type apps_menuSumOrderByAggregateInput = {
    id?: SortOrder
    flag?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
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

  export type permission_group_menuCountOrderByAggregateInput = {
    id?: SortOrder
    group?: SortOrder
    menu?: SortOrder
    access?: SortOrder
    c?: SortOrder
    r?: SortOrder
    u?: SortOrder
    d?: SortOrder
    v?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type permission_group_menuAvgOrderByAggregateInput = {
    id?: SortOrder
    group?: SortOrder
    menu?: SortOrder
    access?: SortOrder
    c?: SortOrder
    r?: SortOrder
    u?: SortOrder
    d?: SortOrder
    v?: SortOrder
  }

  export type permission_group_menuMaxOrderByAggregateInput = {
    id?: SortOrder
    group?: SortOrder
    menu?: SortOrder
    access?: SortOrder
    c?: SortOrder
    r?: SortOrder
    u?: SortOrder
    d?: SortOrder
    v?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type permission_group_menuMinOrderByAggregateInput = {
    id?: SortOrder
    group?: SortOrder
    menu?: SortOrder
    access?: SortOrder
    c?: SortOrder
    r?: SortOrder
    u?: SortOrder
    d?: SortOrder
    v?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type permission_group_menuSumOrderByAggregateInput = {
    id?: SortOrder
    group?: SortOrder
    menu?: SortOrder
    access?: SortOrder
    c?: SortOrder
    r?: SortOrder
    u?: SortOrder
    d?: SortOrder
    v?: SortOrder
  }

  export type role_groupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    flag?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
  }

  export type role_groupAvgOrderByAggregateInput = {
    id?: SortOrder
    flag?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type role_groupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    flag?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
  }

  export type role_groupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    flag?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
  }

  export type role_groupSumOrderByAggregateInput = {
    id?: SortOrder
    flag?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
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

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use apps_menuDefaultArgs instead
     */
    export type apps_menuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = apps_menuDefaultArgs<ExtArgs>
    /**
     * @deprecated Use permission_group_menuDefaultArgs instead
     */
    export type permission_group_menuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = permission_group_menuDefaultArgs<ExtArgs>
    /**
     * @deprecated Use role_groupDefaultArgs instead
     */
    export type role_groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = role_groupDefaultArgs<ExtArgs>

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