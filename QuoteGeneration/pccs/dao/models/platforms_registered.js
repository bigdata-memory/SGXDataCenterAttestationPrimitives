/**
 *
 * Copyright (C) 2011-2019 Intel Corporation. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 *   * Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *   * Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in
 *     the documentation and/or other materials provided with the
 *     distribution.
 *   * Neither the name of Intel Corporation nor the names of its
 *     contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

module.exports = (sequelize, DataTypes) => {
    const PlatformsRegistered = sequelize.define('platforms_registered', {
      qe_id: { type: DataTypes.STRING, primaryKey: true},
      pce_id: { type: DataTypes.STRING, primaryKey: true },
      cpu_svn: { type: DataTypes.STRING, primaryKey: true },
      pce_svn: { type: DataTypes.STRING, primaryKey: true },
      enc_ppid: { type: DataTypes.BLOB, get(){
        let enc_ppid = this.getDataValue('enc_ppid');
        if (enc_ppid)
          return enc_ppid.toString('utf8');
        else return "";
      }},
      platform_manifest: { type: DataTypes.BLOB, get(){
        let platform_manifest = this.getDataValue('platform_manifest');
        if (platform_manifest)
          return platform_manifest.toString('utf8');
        else return "";
      }},
      state: { type: DataTypes.INTEGER }
    },{
        timestamps: true,
        createdAt: 'created_time',
        updatedAt: 'updated_time'
    });

    return PlatformsRegistered;
};