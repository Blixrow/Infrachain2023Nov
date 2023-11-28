import * as ex from "@completium/dapp-ts";
import * as att from "@completium/archetype-ts-types";
import * as el from "@completium/event-listener";
export class Token_Created implements att.ArchetypeType {
    constructor(public e1_token_id: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return this.e1_token_id.to_mich();
    }
    equals(v: Token_Created): boolean {
        return this.e1_token_id.equals(v.e1_token_id);
    }
    static from_mich(input: att.Micheline): Token_Created {
        return new Token_Created(att.Nat.from_mich(input));
    }
}
export class Token_Updated implements att.ArchetypeType {
    constructor(public e2_token_id: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return this.e2_token_id.to_mich();
    }
    equals(v: Token_Updated): boolean {
        return this.e2_token_id.equals(v.e2_token_id);
    }
    static from_mich(input: att.Micheline): Token_Updated {
        return new Token_Updated(att.Nat.from_mich(input));
    }
}
export class Token_Deleted implements att.ArchetypeType {
    constructor(public e3_token_id: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return this.e3_token_id.to_mich();
    }
    equals(v: Token_Deleted): boolean {
        return this.e3_token_id.equals(v.e3_token_id);
    }
    static from_mich(input: att.Micheline): Token_Deleted {
        return new Token_Deleted(att.Nat.from_mich(input));
    }
}
export class scores implements att.ArchetypeType {
    constructor(public country_score: att.Nat, public currency_score: att.Nat, public sector_score: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.country_score.to_mich(), this.currency_score.to_mich(), this.sector_score.to_mich()]);
    }
    equals(v: scores): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): scores {
        return new scores(att.Nat.from_mich((input as att.Mpair).args[0]), att.Nat.from_mich((input as att.Mpair).args[1]), att.Nat.from_mich((input as att.Mpair).args[2]));
    }
}
export class transfer_param implements att.ArchetypeType {
    constructor(public tow: att.Address, public tid: att.Nat, public tname: string, public ttimestamp: string, public d_score: string, public c_score: string, public s_score: string) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.tow.to_mich(), this.tid.to_mich(), att.string_to_mich(this.tname), att.string_to_mich(this.ttimestamp), att.string_to_mich(this.d_score), att.string_to_mich(this.c_score), att.string_to_mich(this.s_score)]);
    }
    equals(v: transfer_param): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): transfer_param {
        return new transfer_param(att.Address.from_mich((input as att.Mpair).args[0]), att.Nat.from_mich((input as att.Mpair).args[1]), att.mich_to_string((input as att.Mpair).args[2]), att.mich_to_string((input as att.Mpair).args[3]), att.mich_to_string((input as att.Mpair).args[4]), att.mich_to_string((input as att.Mpair).args[5]), att.mich_to_string((input as att.Mpair).args[6]));
    }
}
export const scores_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("nat", ["%country_score"]),
    att.prim_annot_to_mich_type("nat", ["%currency_score"]),
    att.prim_annot_to_mich_type("nat", ["%sector_score"])
], []);
export const transfer_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%tow"]),
    att.prim_annot_to_mich_type("nat", ["%tid"]),
    att.prim_annot_to_mich_type("string", ["%name"]),
    att.prim_annot_to_mich_type("string", ["%timestamp"]),
    att.prim_annot_to_mich_type("string", ["%c_score"]),
    att.prim_annot_to_mich_type("string", ["%d_score"]),
    att.prim_annot_to_mich_type("string", ["%s_score"])
], []);
export class funds_key implements att.ArchetypeType {
    constructor(public f_id: att.Nat, public f_owner: att.Address) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.f_id.to_mich(), this.f_owner.to_mich()]);
    }
    equals(v: funds_key): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): funds_key {
        return new funds_key(att.Nat.from_mich((input as att.Mpair).args[0]), att.Address.from_mich((input as att.Mpair).args[1]));
    }
}
export class sub_funds_key implements att.ArchetypeType {
    constructor(public sf_id: att.Nat, public sf_fund: att.Nat, public sf_owner: att.Address) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.sf_id.to_mich(), att.pair_to_mich([this.sf_fund.to_mich(), this.sf_owner.to_mich()])]);
    }
    equals(v: sub_funds_key): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): sub_funds_key {
        return new sub_funds_key(att.Nat.from_mich((input as att.Mpair).args[0]), att.Nat.from_mich((att.pair_to_mich((input as att.Mpair as att.Mpair).args.slice(1, 3)) as att.Mpair).args[0]), att.Address.from_mich((att.pair_to_mich((input as att.Mpair as att.Mpair).args.slice(1, 3)) as att.Mpair).args[1]));
    }
}
export const ledger_key_mich_type: att.MichelineType = att.prim_annot_to_mich_type("address", []);
export const funds_key_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("nat", ["%f_id"]),
    att.prim_annot_to_mich_type("address", ["%f_owner"])
], []);
export const sub_funds_key_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("nat", ["%sf_id"]),
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("nat", ["%sf_fund"]),
        att.prim_annot_to_mich_type("address", ["%sf_owner"])
    ], [])
], []);
export const reports_key_mich_type: att.MichelineType = att.prim_annot_to_mich_type("nat", []);
export const country_map_key_mich_type: att.MichelineType = att.prim_annot_to_mich_type("string", []);
export const currency_map_key_mich_type: att.MichelineType = att.prim_annot_to_mich_type("string", []);
export const sector_map_key_mich_type: att.MichelineType = att.prim_annot_to_mich_type("string", []);
export class ledger_value implements att.ArchetypeType {
    constructor(public l_funds: Array<att.Nat>, public l_reports: Array<att.Nat>) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([att.list_to_mich(this.l_funds, x => {
                return x.to_mich();
            }), att.list_to_mich(this.l_reports, x => {
                return x.to_mich();
            })]);
    }
    equals(v: ledger_value): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): ledger_value {
        return new ledger_value(att.mich_to_list((input as att.Mpair).args[0], x => { return att.Nat.from_mich(x); }), att.mich_to_list((input as att.Mpair).args[1], x => { return att.Nat.from_mich(x); }));
    }
}
export class funds_value implements att.ArchetypeType {
    constructor(public f_name: string, public f_subs: Array<att.Nat>) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([att.string_to_mich(this.f_name), att.list_to_mich(this.f_subs, x => {
                return x.to_mich();
            })]);
    }
    equals(v: funds_value): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): funds_value {
        return new funds_value(att.mich_to_string((input as att.Mpair).args[0]), att.mich_to_list((input as att.Mpair).args[1], x => { return att.Nat.from_mich(x); }));
    }
}
export class sub_funds_value implements att.ArchetypeType {
    constructor(public sf_name: string, public sf_country: string, public sf_currency: string, public sf_sector: string, public sf_nav: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([att.string_to_mich(this.sf_name), att.string_to_mich(this.sf_country), att.string_to_mich(this.sf_currency), att.string_to_mich(this.sf_sector), this.sf_nav.to_mich()]);
    }
    equals(v: sub_funds_value): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): sub_funds_value {
        return new sub_funds_value(att.mich_to_string((input as att.Mpair).args[0]), att.mich_to_string((input as att.Mpair).args[1]), att.mich_to_string((input as att.Mpair).args[2]), att.mich_to_string((input as att.Mpair).args[3]), att.Nat.from_mich((input as att.Mpair).args[4]));
    }
}
export class reports_value implements att.ArchetypeType {
    constructor(public t_owner: att.Address, public t_fund_id: att.Nat, public t_time: string, public t_validated: boolean, public t_scores: scores, public r_data: string, public r_files: string) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.t_owner.to_mich(), this.t_fund_id.to_mich(), att.string_to_mich(this.t_time), att.bool_to_mich(this.t_validated), this.t_scores.to_mich(), att.string_to_mich(this.r_data), att.string_to_mich(this.r_files)]);
    }
    equals(v: reports_value): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): reports_value {
        return new reports_value(att.Address.from_mich((input as att.Mpair).args[0]), att.Nat.from_mich((input as att.Mpair).args[1]), att.mich_to_string((input as att.Mpair).args[2]), att.mich_to_bool((input as att.Mpair).args[3]), scores.from_mich((input as att.Mpair).args[4]), att.mich_to_string((input as att.Mpair).args[5]), att.mich_to_string((input as att.Mpair).args[6]));
    }
}
export const ledger_value_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.set_annot_to_mich_type(att.prim_annot_to_mich_type("nat", []), ["%l_funds"]),
    att.set_annot_to_mich_type(att.prim_annot_to_mich_type("nat", []), ["%l_reports"])
], []);
export const funds_value_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("string", ["%f_name"]),
    att.set_annot_to_mich_type(att.prim_annot_to_mich_type("nat", []), ["%f_subs"])
], []);
export const sub_funds_value_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("string", ["%sf_name"]),
    att.prim_annot_to_mich_type("string", ["%sf_country"]),
    att.prim_annot_to_mich_type("string", ["%sf_currency"]),
    att.prim_annot_to_mich_type("string", ["%sf_sector"]),
    att.prim_annot_to_mich_type("nat", ["%sf_nav"])
], []);
export const reports_value_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%t_owner"]),
    att.prim_annot_to_mich_type("nat", ["%t_fund_id"]),
    att.prim_annot_to_mich_type("string", ["%t_time"]),
    att.prim_annot_to_mich_type("bool", ["%t_validated"]),
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("nat", ["%country_score"]),
        att.prim_annot_to_mich_type("nat", ["%currency_score"]),
        att.prim_annot_to_mich_type("nat", ["%sector_score"])
    ], ["%t_scores"]),
    att.prim_annot_to_mich_type("string", ["%r_data"]),
    att.prim_annot_to_mich_type("string", ["%r_files"])
], []);
export const country_map_value_mich_type: att.MichelineType = att.prim_annot_to_mich_type("bool", []);
export const currency_map_value_mich_type: att.MichelineType = att.prim_annot_to_mich_type("bool", []);
export const sector_map_value_mich_type: att.MichelineType = att.prim_annot_to_mich_type("bool", []);
export type ledger_container = Array<[
    att.Address,
    ledger_value
]>;
export type funds_container = Array<[
    funds_key,
    funds_value
]>;
export type sub_funds_container = Array<[
    sub_funds_key,
    sub_funds_value
]>;
export type reports_container = Array<[
    att.Nat,
    reports_value
]>;
export type country_map_container = Array<[
    string,
    boolean
]>;
export type currency_map_container = Array<[
    string,
    boolean
]>;
export type sector_map_container = Array<[
    string,
    boolean
]>;
export const ledger_container_mich_type: att.MichelineType = att.pair_annot_to_mich_type("big_map", att.prim_annot_to_mich_type("address", []), att.pair_array_to_mich_type([
    att.set_annot_to_mich_type(att.prim_annot_to_mich_type("nat", []), ["%l_funds"]),
    att.set_annot_to_mich_type(att.prim_annot_to_mich_type("nat", []), ["%l_reports"])
], []), []);
export const funds_container_mich_type: att.MichelineType = att.pair_annot_to_mich_type("big_map", att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("nat", ["%f_id"]),
    att.prim_annot_to_mich_type("address", ["%f_owner"])
], []), att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("string", ["%f_name"]),
    att.set_annot_to_mich_type(att.prim_annot_to_mich_type("nat", []), ["%f_subs"])
], []), []);
export const sub_funds_container_mich_type: att.MichelineType = att.pair_annot_to_mich_type("big_map", att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("nat", ["%sf_id"]),
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("nat", ["%sf_fund"]),
        att.prim_annot_to_mich_type("address", ["%sf_owner"])
    ], [])
], []), att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("string", ["%sf_name"]),
    att.prim_annot_to_mich_type("string", ["%sf_country"]),
    att.prim_annot_to_mich_type("string", ["%sf_currency"]),
    att.prim_annot_to_mich_type("string", ["%sf_sector"]),
    att.prim_annot_to_mich_type("nat", ["%sf_nav"])
], []), []);
export const reports_container_mich_type: att.MichelineType = att.pair_annot_to_mich_type("big_map", att.prim_annot_to_mich_type("nat", []), att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%t_owner"]),
    att.prim_annot_to_mich_type("nat", ["%t_fund_id"]),
    att.prim_annot_to_mich_type("string", ["%t_time"]),
    att.prim_annot_to_mich_type("bool", ["%t_validated"]),
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("nat", ["%country_score"]),
        att.prim_annot_to_mich_type("nat", ["%currency_score"]),
        att.prim_annot_to_mich_type("nat", ["%sector_score"])
    ], ["%t_scores"]),
    att.prim_annot_to_mich_type("string", ["%r_data"]),
    att.prim_annot_to_mich_type("string", ["%r_files"])
], []), []);
export const country_map_container_mich_type: att.MichelineType = att.pair_annot_to_mich_type("big_map", att.prim_annot_to_mich_type("string", []), att.prim_annot_to_mich_type("bool", []), []);
export const currency_map_container_mich_type: att.MichelineType = att.pair_annot_to_mich_type("big_map", att.prim_annot_to_mich_type("string", []), att.prim_annot_to_mich_type("bool", []), []);
export const sector_map_container_mich_type: att.MichelineType = att.pair_annot_to_mich_type("big_map", att.prim_annot_to_mich_type("string", []), att.prim_annot_to_mich_type("bool", []), []);
const pause_arg_to_mich = (): att.Micheline => {
    return att.unit_mich;
}
const unpause_arg_to_mich = (): att.Micheline => {
    return att.unit_mich;
}
const declare_ownership_arg_to_mich = (candidate: att.Address): att.Micheline => {
    return candidate.to_mich();
}
const declare_admin_arg_to_mich = (candidate: att.Address): att.Micheline => {
    return candidate.to_mich();
}
const update_token_contract_arg_to_mich = (new_address: att.Address): att.Micheline => {
    return new_address.to_mich();
}
const set_metadata_arg_to_mich = (k: string, d: att.Option<att.Bytes>): att.Micheline => {
    return att.pair_to_mich([
        att.string_to_mich(k),
        d.to_mich((x => { return x.to_mich(); }))
    ]);
}
const update_mapping_arg_to_mich = (typ: string, name: string, risk: boolean): att.Micheline => {
    return att.pair_to_mich([
        att.string_to_mich(typ),
        att.string_to_mich(name),
        att.bool_to_mich(risk)
    ]);
}
const create_fund_arg_to_mich = (fund_id: att.Nat, name: string): att.Micheline => {
    return att.pair_to_mich([
        fund_id.to_mich(),
        att.string_to_mich(name)
    ]);
}
const update_fund_arg_to_mich = (fund_id: att.Nat, name: string): att.Micheline => {
    return att.pair_to_mich([
        fund_id.to_mich(),
        att.string_to_mich(name)
    ]);
}
const delete_fund_arg_to_mich = (fund_id: att.Nat): att.Micheline => {
    return fund_id.to_mich();
}
const create_sub_fund_arg_to_mich = (fund_id: att.Nat, sub_fund_id: att.Nat, name: string, scountry: string, scurrency: string, ssector: string, nav: att.Nat): att.Micheline => {
    return att.pair_to_mich([
        fund_id.to_mich(),
        sub_fund_id.to_mich(),
        att.string_to_mich(name),
        att.string_to_mich(scountry),
        att.string_to_mich(scurrency),
        att.string_to_mich(ssector),
        nav.to_mich()
    ]);
}
const update_sub_fund_arg_to_mich = (fund_id: att.Nat, sub_fund_id: att.Nat, name: string, scountry: string, scurrency: string, ssector: string, nav: att.Nat): att.Micheline => {
    return att.pair_to_mich([
        fund_id.to_mich(),
        sub_fund_id.to_mich(),
        att.string_to_mich(name),
        att.string_to_mich(scountry),
        att.string_to_mich(scurrency),
        att.string_to_mich(ssector),
        nav.to_mich()
    ]);
}
const delete_sub_fund_arg_to_mich = (fund_id: att.Nat, sub_fund_id: att.Nat): att.Micheline => {
    return att.pair_to_mich([
        fund_id.to_mich(),
        sub_fund_id.to_mich()
    ]);
}
const score_arg_to_mich = (fund_id: att.Nat, time: string, data_link: string, files_link: string): att.Micheline => {
    return att.pair_to_mich([
        fund_id.to_mich(),
        att.string_to_mich(time),
        att.string_to_mich(data_link),
        att.string_to_mich(files_link)
    ]);
}
const update_token_arg_to_mich = (tok_id: att.Nat, oper: boolean): att.Micheline => {
    return att.pair_to_mich([
        tok_id.to_mich(),
        att.bool_to_mich(oper)
    ]);
}
export class Esg_main {
    address: string | undefined;
    constructor(address: string | undefined = undefined) {
        this.address = address;
    }
    get_address(): att.Address {
        if (undefined != this.address) {
            return new att.Address(this.address);
        }
        throw new Error("Contract not initialised");
    }
    async get_balance(): Promise<att.Tez> {
        if (null != this.address) {
            return await ex.get_balance(new att.Address(this.address));
        }
        throw new Error("Contract not initialised");
    }
    async deploy(owner: att.Address, params: Partial<ex.Parameters>) {
        const address = (await ex.deploy("./esg_main.arl", {
            owner: owner.to_mich()
        }, params)).address;
        this.address = address;
    }
    async pause(params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "pause", pause_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async unpause(params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "unpause", unpause_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async declare_ownership(candidate: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "declare_ownership", declare_ownership_arg_to_mich(candidate), params);
        }
        throw new Error("Contract not initialised");
    }
    async declare_admin(candidate: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "declare_admin", declare_admin_arg_to_mich(candidate), params);
        }
        throw new Error("Contract not initialised");
    }
    async update_token_contract(new_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "update_token_contract", update_token_contract_arg_to_mich(new_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async set_metadata(k: string, d: att.Option<att.Bytes>, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "set_metadata", set_metadata_arg_to_mich(k, d), params);
        }
        throw new Error("Contract not initialised");
    }
    async update_mapping(typ: string, name: string, risk: boolean, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "update_mapping", update_mapping_arg_to_mich(typ, name, risk), params);
        }
        throw new Error("Contract not initialised");
    }
    async create_fund(fund_id: att.Nat, name: string, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "create_fund", create_fund_arg_to_mich(fund_id, name), params);
        }
        throw new Error("Contract not initialised");
    }
    async update_fund(fund_id: att.Nat, name: string, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "update_fund", update_fund_arg_to_mich(fund_id, name), params);
        }
        throw new Error("Contract not initialised");
    }
    async delete_fund(fund_id: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "delete_fund", delete_fund_arg_to_mich(fund_id), params);
        }
        throw new Error("Contract not initialised");
    }
    async create_sub_fund(fund_id: att.Nat, sub_fund_id: att.Nat, name: string, scountry: string, scurrency: string, ssector: string, nav: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "create_sub_fund", create_sub_fund_arg_to_mich(fund_id, sub_fund_id, name, scountry, scurrency, ssector, nav), params);
        }
        throw new Error("Contract not initialised");
    }
    async update_sub_fund(fund_id: att.Nat, sub_fund_id: att.Nat, name: string, scountry: string, scurrency: string, ssector: string, nav: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "update_sub_fund", update_sub_fund_arg_to_mich(fund_id, sub_fund_id, name, scountry, scurrency, ssector, nav), params);
        }
        throw new Error("Contract not initialised");
    }
    async delete_sub_fund(fund_id: att.Nat, sub_fund_id: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "delete_sub_fund", delete_sub_fund_arg_to_mich(fund_id, sub_fund_id), params);
        }
        throw new Error("Contract not initialised");
    }
    async score(fund_id: att.Nat, time: string, data_link: string, files_link: string, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "score", score_arg_to_mich(fund_id, time, data_link, files_link), params);
        }
        throw new Error("Contract not initialised");
    }
    async update_token(tok_id: att.Nat, oper: boolean, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "update_token", update_token_arg_to_mich(tok_id, oper), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_pause_param(params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "pause", pause_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_unpause_param(params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "unpause", unpause_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_declare_ownership_param(candidate: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "declare_ownership", declare_ownership_arg_to_mich(candidate), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_declare_admin_param(candidate: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "declare_admin", declare_admin_arg_to_mich(candidate), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_update_token_contract_param(new_address: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "update_token_contract", update_token_contract_arg_to_mich(new_address), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_set_metadata_param(k: string, d: att.Option<att.Bytes>, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "set_metadata", set_metadata_arg_to_mich(k, d), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_update_mapping_param(typ: string, name: string, risk: boolean, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "update_mapping", update_mapping_arg_to_mich(typ, name, risk), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_create_fund_param(fund_id: att.Nat, name: string, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "create_fund", create_fund_arg_to_mich(fund_id, name), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_update_fund_param(fund_id: att.Nat, name: string, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "update_fund", update_fund_arg_to_mich(fund_id, name), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_delete_fund_param(fund_id: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "delete_fund", delete_fund_arg_to_mich(fund_id), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_create_sub_fund_param(fund_id: att.Nat, sub_fund_id: att.Nat, name: string, scountry: string, scurrency: string, ssector: string, nav: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "create_sub_fund", create_sub_fund_arg_to_mich(fund_id, sub_fund_id, name, scountry, scurrency, ssector, nav), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_update_sub_fund_param(fund_id: att.Nat, sub_fund_id: att.Nat, name: string, scountry: string, scurrency: string, ssector: string, nav: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "update_sub_fund", update_sub_fund_arg_to_mich(fund_id, sub_fund_id, name, scountry, scurrency, ssector, nav), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_delete_sub_fund_param(fund_id: att.Nat, sub_fund_id: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "delete_sub_fund", delete_sub_fund_arg_to_mich(fund_id, sub_fund_id), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_score_param(fund_id: att.Nat, time: string, data_link: string, files_link: string, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "score", score_arg_to_mich(fund_id, time, data_link, files_link), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_update_token_param(tok_id: att.Nat, oper: boolean, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "update_token", update_token_arg_to_mich(tok_id, oper), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_owner(): Promise<att.Address> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.Address.from_mich((storage as att.Mpair).args[0]);
        }
        throw new Error("Contract not initialised");
    }
    async get_paused(): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.mich_to_bool((storage as att.Mpair).args[1]);
        }
        throw new Error("Contract not initialised");
    }
    async get_token_contract(): Promise<att.Address> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.Address.from_mich((storage as att.Mpair).args[2]);
        }
        throw new Error("Contract not initialised");
    }
    async get_current_token_id(): Promise<att.Nat> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.Nat.from_mich((storage as att.Mpair).args[3]);
        }
        throw new Error("Contract not initialised");
    }
    async get_admin(): Promise<att.Address> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.Address.from_mich((storage as att.Mpair).args[4]);
        }
        throw new Error("Contract not initialised");
    }
    async get_ledger_value(key: att.Address): Promise<ledger_value | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[5]).toString()), key.to_mich(), ledger_key_mich_type);
            if (data != undefined) {
                return ledger_value.from_mich(data);
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_ledger_value(key: att.Address): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[5]).toString()), key.to_mich(), ledger_key_mich_type);
            if (data != undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        throw new Error("Contract not initialised");
    }
    async get_funds_value(key: funds_key): Promise<funds_value | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[6]).toString()), key.to_mich(), funds_key_mich_type);
            if (data != undefined) {
                return funds_value.from_mich(data);
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_funds_value(key: funds_key): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[6]).toString()), key.to_mich(), funds_key_mich_type);
            if (data != undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        throw new Error("Contract not initialised");
    }
    async get_sub_funds_value(key: sub_funds_key): Promise<sub_funds_value | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[7]).toString()), key.to_mich(), sub_funds_key_mich_type);
            if (data != undefined) {
                return sub_funds_value.from_mich(data);
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_sub_funds_value(key: sub_funds_key): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[7]).toString()), key.to_mich(), sub_funds_key_mich_type);
            if (data != undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        throw new Error("Contract not initialised");
    }
    async get_reports_value(key: att.Nat): Promise<reports_value | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[8]).toString()), key.to_mich(), reports_key_mich_type);
            if (data != undefined) {
                return reports_value.from_mich(data);
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_reports_value(key: att.Nat): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[8]).toString()), key.to_mich(), reports_key_mich_type);
            if (data != undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        throw new Error("Contract not initialised");
    }
    async get_country_map_value(key: string): Promise<boolean | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[9]).toString()), att.string_to_mich(key), country_map_key_mich_type);
            if (data != undefined) {
                return att.mich_to_bool(data);
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_country_map_value(key: string): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[9]).toString()), att.string_to_mich(key), country_map_key_mich_type);
            if (data != undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        throw new Error("Contract not initialised");
    }
    async get_currency_map_value(key: string): Promise<boolean | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[10]).toString()), att.string_to_mich(key), currency_map_key_mich_type);
            if (data != undefined) {
                return att.mich_to_bool(data);
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_currency_map_value(key: string): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[10]).toString()), att.string_to_mich(key), currency_map_key_mich_type);
            if (data != undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        throw new Error("Contract not initialised");
    }
    async get_sector_map_value(key: string): Promise<boolean | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[11]).toString()), att.string_to_mich(key), sector_map_key_mich_type);
            if (data != undefined) {
                return att.mich_to_bool(data);
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_sector_map_value(key: string): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[11]).toString()), att.string_to_mich(key), sector_map_key_mich_type);
            if (data != undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        throw new Error("Contract not initialised");
    }
    async get_metadata_value(key: string): Promise<att.Bytes | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[12]).toString()), att.string_to_mich(key), att.prim_annot_to_mich_type("string", []));
            if (data != undefined) {
                return att.Bytes.from_mich(data);
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_metadata_value(key: string): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(att.Int.from_mich((storage as att.Mpair).args[12]).toString()), att.string_to_mich(key), att.prim_annot_to_mich_type("string", []));
            if (data != undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        throw new Error("Contract not initialised");
    }
    register_Token_Created(ep: el.EventProcessor<Token_Created>) {
        if (this.address != undefined) {
            el.registerEvent({ source: this.address, filter: tag => { return tag == "Token_Created"; }, process: (raw: any, data: el.EventData | undefined) => {
                    const event = (x => {
                        return Token_Created.from_mich((att.normalize(x) as att.Micheline));
                    })(raw);
                    ep(event, data);
                } });
            return;
        }
        throw new Error("Contract not initialised");
    }
    register_Token_Updated(ep: el.EventProcessor<Token_Updated>) {
        if (this.address != undefined) {
            el.registerEvent({ source: this.address, filter: tag => { return tag == "Token_Updated"; }, process: (raw: any, data: el.EventData | undefined) => {
                    const event = (x => {
                        return Token_Updated.from_mich((att.normalize(x) as att.Micheline));
                    })(raw);
                    ep(event, data);
                } });
            return;
        }
        throw new Error("Contract not initialised");
    }
    register_Token_Deleted(ep: el.EventProcessor<Token_Deleted>) {
        if (this.address != undefined) {
            el.registerEvent({ source: this.address, filter: tag => { return tag == "Token_Deleted"; }, process: (raw: any, data: el.EventData | undefined) => {
                    const event = (x => {
                        return Token_Deleted.from_mich((att.normalize(x) as att.Micheline));
                    })(raw);
                    ep(event, data);
                } });
            return;
        }
        throw new Error("Contract not initialised");
    }
    errors = {
        t1: att.string_to_mich("\"TOKEN_UNDEFINED\""),
        rq9: att.string_to_mich("\"CONTRACT_PAUSED\""),
        INVALID_CALLER: att.string_to_mich("\"INVALID_CALLER\""),
        OPTION_IS_NONE: att.string_to_mich("\"OPTION_IS_NONE\""),
        f6: att.string_to_mich("\"FUND_UNDEFINED\""),
        o6: att.string_to_mich("\"OWNER_UNDEFINED\""),
        rq8: att.string_to_mich("\"CONTRACT_PAUSED\""),
        s2: att.string_to_mich("\"SUBFUND_UNDEFINED\""),
        f5: att.string_to_mich("\"FUND_UNDEFINED\""),
        o5: att.string_to_mich("\"OWNER_UNDEFINED\""),
        rq7: att.string_to_mich("\"CONTRACT_PAUSED\""),
        s1: att.string_to_mich("\"SUBFUND_UNDEFINED\""),
        f4: att.string_to_mich("\"FUND_UNDEFINED\""),
        o4: att.string_to_mich("\"OWNER_UNDEFINED\""),
        rq6: att.string_to_mich("\"CONTRACT_PAUSED\""),
        es1: att.string_to_mich("\"SUBFUND_EXISTS\""),
        f3: att.string_to_mich("\"FUND_UNDEFINED\""),
        o3: att.string_to_mich("\"OWNER_UNDEFINED\""),
        rq5: att.string_to_mich("\"CONTRACT_PAUSED\""),
        f2: att.string_to_mich("\"FUND_UNDEFINED\""),
        o2: att.string_to_mich("\"OWNER_UNDEFINED\""),
        rq4: att.string_to_mich("\"CONTRACT_PAUSED\""),
        f1: att.string_to_mich("\"FUND_UNDEFINED\""),
        o1: att.string_to_mich("\"OWNER_UNDEFINED\""),
        rq3: att.string_to_mich("\"CONTRACT_PAUSED\""),
        FUND_EXISTS: att.string_to_mich("\"FUND_EXISTS\""),
        rq2: att.string_to_mich("\"CONTRACT_PAUSED\""),
        WRONG_MAP_TYPE: att.string_to_mich("\"WRONG_MAP_TYPE\""),
        rq1: att.string_to_mich("\"CONTRACT_PAUSED\""),
        md_r1: att.string_to_mich("\"CONTRACT_PAUSED\""),
        NO_TRANSFER: att.string_to_mich("\"NO_TRANSFER\""),
        tc_r1: att.string_to_mich("\"CONTRACT_PAUSED\""),
        is_paused: att.string_to_mich("\"CONTRACT_NOT_PAUSED\""),
        not_paused: att.string_to_mich("\"CONTRACT_PAUSED\"")
    };
}
export const esg_main = new Esg_main();
