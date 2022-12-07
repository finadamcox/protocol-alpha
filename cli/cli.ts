#!/usr/bin/env ts-node
import * as dotenv from "dotenv";
import yargs from "yargs";
import { evmCommand, moduleCommand, protocolCommand } from "./commands";
import { cliOpts } from "./defaults";

dotenv.config();

yargs
  .parserConfiguration({
    "short-option-groups": true,
    "camel-case-expansion": true,
    "dot-notation": true,
    "parse-numbers": false,
    "parse-positional-numbers": false,
    "boolean-negation": true,
  })
  .env(true)
  .option("m", cliOpts.mnemonic)
  .option("c", cliOpts.chainId)
  .option("n", cliOpts.accountNumber)
  .command(protocolCommand)
  .command(evmCommand)
  .command(moduleCommand)
  .demandCommand(1, "Choose a command from the above list")
  .help().argv;