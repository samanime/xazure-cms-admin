import { Router } from 'express';
import { readModuleFile, normalizePath } from 'xazure-cms-utils';

export default ({ config, module, a, eventManager }) => {
  const { normalApiPath } = module;
  return Router()
    .get(`${normalApiPath}/nav-items`, async (req, res) => {
      res.send((await a('getAdminNavItems', { navItems: [], req })).navItems);
    })
    .get(`${normalApiPath}/scripts`, async (req, res) => {
      res.send((await a('getAdminScripts', { scripts: [] })).scripts);
    })
    .get('*', async (req, res) => res.send(await readModuleFile(eventManager, module, 'public/index.html', req)))
};